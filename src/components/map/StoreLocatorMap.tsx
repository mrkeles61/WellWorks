import { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Fix Leaflet default icon issue
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;

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

const CENTER_TURKEY: [number, number] = [39.0, 35.5]; // Default center
const ZOOM_DEFAULT = 6;

// Component to handle "Fly To" behavior
const MapController = ({ center }: { center: [number, number] | null }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, 13);
        }
    }, [center, map]);
    return null;
};

const StoreLocatorMap = () => {
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data
    useEffect(() => {
        fetch('/pharmacies_with_coords.json')
            .then(res => {
                if (!res.ok) throw new Error('Veri yüklenemedi');
                return res.json();
            })
            .then(data => {
                // Filter out entries without coordinates
                const validData = data.filter((p: Pharmacy) => p.lat && p.lng);
                setPharmacies(validData);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Eczane listesi yüklenirken bir hata oluştu.');
                setLoading(false);
            });
    }, []);

    // Navigation logic
    const handleMarkerClick = (pharmacy: Pharmacy) => {
        if (!pharmacy.lat || !pharmacy.lng) return;

        const { lat, lng } = pharmacy;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        const isAndroid = /Android/.test(navigator.userAgent);

        let url = '';

        if (isIOS) {
            // Apple Maps
            url = `maps://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
        } else if (isAndroid) {
            // Google Maps Intent / Web Link
            url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        } else {
            // Desktop fallback
            url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        }

        window.open(url, '_blank');
    };

    const handleNearMe = () => {
        if (!navigator.geolocation) {
            alert('Tarayıcınız konum servisini desteklemiyor.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation([position.coords.latitude, position.coords.longitude]);
            },
            () => {
                alert('Konumunuza erişilemedi. Lütfen izinlerinizi kontrol edin.');
            }
        );
    };

    if (loading) return <div className="h-[500px] w-full bg-gray-100 animate-pulse flex items-center justify-center">Eczaneler Yükleniyor...</div>;
    if (error) return <div className="h-64 flex items-center justify-center text-red-500">{error}</div>;

    return (
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
            {/* Near Me Button (Overlay) */}
            <div className="absolute top-4 right-4 z-[1000]">
                <Button
                    onClick={handleNearMe}
                    className="bg-white text-gray-800 hover:bg-gray-50 shadow-md border border-gray-200"
                >
                    <Navigation className="w-4 h-4 mr-2 text-blue-600" />
                    Yakınımdaki Eczaneler
                </Button>
            </div>

            <MapContainer
                center={CENTER_TURKEY}
                zoom={ZOOM_DEFAULT}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <MapController center={userLocation} />

                {/* User Location Marker */}
                {userLocation && (
                    <Marker position={userLocation} icon={new L.Icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })} />
                )}

                {/* Pharmacy Markers */}
                {pharmacies.map((pharmacy) => (
                    <Marker
                        key={pharmacy.id}
                        position={[pharmacy.lat!, pharmacy.lng!]}
                        eventHandlers={{
                            click: () => handleMarkerClick(pharmacy)
                        }}
                    >
                        {/* We use default markers but they open nav on click, no popup needed globally. 
                            If a user wants to see the name first, they usually hover or we can add a tooltip.
                            Requirements said: "Clicking a marker should IMMEDIATELY open navigation".
                        */}
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default StoreLocatorMap;
