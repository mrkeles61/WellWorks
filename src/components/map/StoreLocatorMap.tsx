import { useEffect, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, MapPin, Search, Loader2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

// Fix Leaflet default icon issue
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

interface Pharmacy {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    county: string;
    lat: number | null;
    lng: number | null;
}

interface DataResponse {
    meta: {
        generatedAt: string;
        totalCount: number;
        geocodedCount: number;
        missingCount: number;
    };
    pharmacies: Pharmacy[];
}

const CENTER_TURKEY: [number, number] = [39.0, 35.5];
const ZOOM_DEFAULT = 6;

// Map controller for fly-to
const MapController = ({ center, zoom }: { center: [number, number] | null; zoom?: number }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom || 13);
        }
    }, [center, zoom, map]);
    return null;
};

// Navigation URL generator
const getNavigationUrl = (pharmacy: Pharmacy): string => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;

    if (pharmacy.lat && pharmacy.lng) {
        if (isIOS) {
            return `maps://maps.apple.com/?daddr=${pharmacy.lat},${pharmacy.lng}&dirflg=d`;
        }
        return `https://www.google.com/maps/dir/?api=1&destination=${pharmacy.lat},${pharmacy.lng}`;
    }
    // Address-based fallback
    const fullAddress = `${pharmacy.address}, ${pharmacy.county}, ${pharmacy.city}, Türkiye`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
};

const StoreLocatorMap = () => {
    const { t } = useTranslation();
    const [allPharmacies, setAllPharmacies] = useState<Pharmacy[]>([]);
    const [meta, setMeta] = useState<DataResponse['meta'] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filters
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedCounty, setSelectedCounty] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState('');

    // Map state
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [focusedPharmacy, setFocusedPharmacy] = useState<Pharmacy | null>(null);
    const mapRef = useRef<L.Map | null>(null);

    // Fetch data
    useEffect(() => {
        fetch('/pharmacies_with_coords.json')
            .then(res => {
                if (!res.ok) throw new Error('Veri yüklenemedi');
                return res.json();
            })
            .then((data: DataResponse) => {
                setMeta(data.meta);
                setAllPharmacies(data.pharmacies);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Eczane listesi yüklenirken bir hata oluştu.');
                setLoading(false);
            });
    }, []);

    // Derived data
    const cities = useMemo(() =>
        [...new Set(allPharmacies.map(p => p.city))].sort(),
        [allPharmacies]);

    const counties = useMemo(() => {
        if (!selectedCity) return [];
        return [...new Set(allPharmacies.filter(p => p.city === selectedCity).map(p => p.county))].sort();
    }, [allPharmacies, selectedCity]);

    const filteredPharmacies = useMemo(() => {
        return allPharmacies.filter(p => {
            if (selectedCity && p.city !== selectedCity) return false;
            if (selectedCounty && p.county !== selectedCounty) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                if (!p.name.toLowerCase().includes(q) && !p.address.toLowerCase().includes(q)) return false;
            }
            return true;
        });
    }, [allPharmacies, selectedCity, selectedCounty, searchQuery]);

    const pharmaciesWithCoords = useMemo(() =>
        filteredPharmacies.filter(p => p.lat && p.lng),
        [filteredPharmacies]);

    const pharmaciesWithoutCoords = useMemo(() =>
        filteredPharmacies.filter(p => !p.lat || !p.lng),
        [filteredPharmacies]);

    // Handlers
    const handleNearMe = () => {
        if (!navigator.geolocation) {
            alert('Tarayıcınız konum servisini desteklemiyor.');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => setUserLocation([position.coords.latitude, position.coords.longitude]),
            () => alert('Konumunuza erişilemedi. Lütfen izinlerinizi kontrol edin.')
        );
    };

    const handleListItemClick = (pharmacy: Pharmacy) => {
        if (pharmacy.lat && pharmacy.lng) {
            setFocusedPharmacy(pharmacy);
        } else {
            window.open(getNavigationUrl(pharmacy), '_blank');
        }
    };

    const handleNavigate = (pharmacy: Pharmacy) => {
        window.open(getNavigationUrl(pharmacy), '_blank');
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (loading) {
        return (
            <div className="h-[600px] w-full bg-gray-100 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <span className="ml-3 text-gray-600">{t('health.storeLocator.loading')}</span>
            </div>
        );
    }

    if (error) {
        return <div className="h-64 flex items-center justify-center text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-[700px]">
            {/* List Panel */}
            <div className="w-full lg:w-[35%] flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-200 space-y-3">
                    <div className="flex gap-2">
                        <select
                            value={selectedCity}
                            onChange={(e) => { setSelectedCity(e.target.value); setSelectedCounty(''); }}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">{t('health.storeLocator.allCities')}</option>
                            {cities.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                        <select
                            value={selectedCounty}
                            onChange={(e) => setSelectedCounty(e.target.value)}
                            disabled={!selectedCity}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            <option value="">{t('health.storeLocator.allCounties')}</option>
                            {counties.map(county => <option key={county} value={county}>{county}</option>)}
                        </select>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t('health.storeLocator.searchPlaceholder')}
                            className="pl-10"
                        />
                    </div>
                    <div className="text-sm text-gray-500">
                        {filteredPharmacies.length} {t('health.storeLocator.results')}
                        {selectedCounty && ` • ${selectedCounty}: ${filteredPharmacies.length}`}
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto">
                    {filteredPharmacies.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            {t('health.storeLocator.noResults')}
                        </div>
                    ) : (
                        filteredPharmacies.map(pharmacy => (
                            <div
                                key={pharmacy.id}
                                onClick={() => handleListItemClick(pharmacy)}
                                className={cn(
                                    "p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors",
                                    focusedPharmacy?.id === pharmacy.id && "bg-blue-50"
                                )}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 truncate">{pharmacy.name}</h4>
                                        <p className="text-sm text-gray-500">{pharmacy.city}, {pharmacy.county}</p>
                                        <p className="text-sm text-gray-400 line-clamp-2 mt-1">{pharmacy.address}</p>
                                        {(!pharmacy.lat || !pharmacy.lng) && (
                                            <span className="inline-block mt-2 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">
                                                {t('health.storeLocator.addressBased')}
                                            </span>
                                        )}
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={(e) => { e.stopPropagation(); handleNavigate(pharmacy); }}
                                        className="ml-3 shrink-0"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        {t('health.storeLocator.getDirections')}
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer stats */}
                {meta && (
                    <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 text-center">
                        {t('health.storeLocator.onMap')}: {pharmaciesWithCoords.length} / {filteredPharmacies.length} • {t('health.storeLocator.addressBased')}: {pharmaciesWithoutCoords.length}
                    </div>
                )}
            </div>

            {/* Map Panel */}
            <div className="w-full lg:w-[65%] h-full relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                {/* Near Me Button */}
                <div className="absolute top-4 right-4 z-[1000]">
                    <Button onClick={handleNearMe} className="bg-white text-gray-800 hover:bg-gray-50 shadow-md border border-gray-200">
                        <Navigation className="w-4 h-4 mr-2 text-blue-600" />
                        {t('health.storeLocator.nearMe')}
                    </Button>
                </div>

                {pharmaciesWithCoords.length === 0 ? (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <MapPin className="w-6 h-6 mr-2" />
                        {t('health.storeLocator.noMapResults')}
                    </div>
                ) : (
                    <MapContainer
                        center={CENTER_TURKEY}
                        zoom={ZOOM_DEFAULT}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={true}
                        ref={mapRef}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        />

                        <MapController center={focusedPharmacy ? [focusedPharmacy.lat!, focusedPharmacy.lng!] : userLocation} />

                        {userLocation && (
                            <Marker position={userLocation} icon={new L.Icon({
                                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
                            })} />
                        )}

                        <MarkerClusterGroup chunkedLoading>
                            {pharmaciesWithCoords.map(pharmacy => (
                                <Marker
                                    key={pharmacy.id}
                                    position={[pharmacy.lat!, pharmacy.lng!]}
                                    eventHandlers={{
                                        click: () => isMobile ? handleNavigate(pharmacy) : setFocusedPharmacy(pharmacy)
                                    }}
                                >
                                    {!isMobile && (
                                        <Popup>
                                            <div className="text-sm">
                                                <strong>{pharmacy.name}</strong>
                                                <p className="text-gray-500">{pharmacy.address}</p>
                                                <Button
                                                    size="sm"
                                                    className="mt-2 w-full"
                                                    onClick={() => handleNavigate(pharmacy)}
                                                >
                                                    {t('health.storeLocator.getDirections')}
                                                </Button>
                                            </div>
                                        </Popup>
                                    )}
                                </Marker>
                            ))}
                        </MarkerClusterGroup>
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default StoreLocatorMap;
