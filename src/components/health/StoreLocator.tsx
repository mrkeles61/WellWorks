import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

// Define the shape of our data
interface Store {
    name: string;
    phone: string;
    email: string;
    address: string;
    map: string;
}

interface County {
    name: string;
    shopping: Store[];
}

interface City {
    city: string;
    counties: County[];
}

const StoreLocator = () => {
    const { t } = useTranslation();

    // State for data and selection
    const [cities, setCities] = useState<City[]>([]);
    const [selectedCityIndex, setSelectedCityIndex] = useState<string>(""); // Storing index as string for Select value
    const [selectedCountyIndex, setSelectedCountyIndex] = useState<string>(""); // Storing index as string
    const [isLoading, setIsLoading] = useState(true);

    // Fetch cities data on mount
    useEffect(() => {
        fetch('/cities.json')
            .then(res => res.json())
            .then(data => {
                setCities(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load store data:", err);
                setIsLoading(false);
            });
    }, []);

    // Derived state
    const selectedCity = selectedCityIndex !== "" ? cities[parseInt(selectedCityIndex)] : null;
    const counties = selectedCity ? selectedCity.counties : [];
    const selectedCounty = (selectedCity && selectedCountyIndex !== "") ? selectedCity.counties[parseInt(selectedCountyIndex)] : null;
    const stores = selectedCounty ? selectedCounty.shopping : [];

    // Handlers
    const handleCityChange = (value: string) => {
        setSelectedCityIndex(value);
        setSelectedCountyIndex(""); // Reset county when city changes
    };

    const handleCountyChange = (value: string) => {
        setSelectedCountyIndex(value);
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0">

                {/* Left Panel: Search & Results */}
                <div className="lg:col-span-5 p-8 flex flex-col h-[600px] border-r border-gray-100">

                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <Search className="w-6 h-6 text-health-primary" />
                            {t('store.locator.title', 'Satış Noktaları')}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {t('store.locator.subtitle', 'Size en yakın satış noktasını bulun')}
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="space-y-4 mb-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">İl Seçin</label>
                            <Select onValueChange={handleCityChange} value={selectedCityIndex}>
                                <SelectTrigger className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:ring-health-primary/20">
                                    <SelectValue placeholder="İl Seçiniz" />
                                </SelectTrigger>
                                <SelectContent>
                                    {cities.map((city, index) => (
                                        <SelectItem key={index} value={index.toString()}>{city.city}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">İlçe Seçin</label>
                            <Select
                                onValueChange={handleCountyChange}
                                value={selectedCountyIndex}
                                disabled={!selectedCity}
                            >
                                <SelectTrigger className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:ring-health-primary/20">
                                    <SelectValue placeholder="İlçe Seçiniz" />
                                </SelectTrigger>
                                <SelectContent>
                                    {counties.map((county, index) => (
                                        <SelectItem key={index} value={index.toString()}>{county.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Results List */}
                    {/* Results List */}
                    <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-3 custom-scrollbar">
                        {stores.length > 0 ? (
                            stores.map((store, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-health-primary/30 hover:shadow-md transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-gray-900 group-hover:text-health-primary transition-colors">
                                            {store.name}
                                        </h4>
                                        <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                                            Açık
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-2 text-gray-500 text-sm mb-3">
                                        <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
                                        <span className="leading-snug text-xs">{store.address}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            asChild
                                            size="sm"
                                            variant="outline"
                                            className="h-8 text-xs w-full border-health-primary/20 text-health-primary hover:bg-health-primary hover:text-white"
                                        >
                                            <a
                                                href={store.map && store.map.length > 0 ? store.map : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.name} ${store.address}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Navigation className="w-3 h-3 mr-1.5" /> Yol Tarifi
                                            </a>
                                        </Button>
                                        {store.phone && (
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="ghost"
                                                className="h-8 w-8 p-0 rounded-full text-gray-400 hover:text-health-primary hover:bg-health-primary/10"
                                            >
                                                <a href={`tel:${store.phone}`}>
                                                    <Phone className="w-3.5 h-3.5" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center h-48 text-gray-400 text-center">
                                <MapPin className="w-12 h-12 mb-3 opacity-20" />
                                <p className="text-sm">
                                    {isLoading ? 'Yükleniyor...' : (selectedCounty ? 'Bu ilçede kayıtlı satış noktası bulunamadı.' : 'Lütfen il ve ilçe seçiniz.')}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;
