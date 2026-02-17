import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface SalesPointsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const salesPoints = [
    {
        name: 'Trendyol',
        logo: '/logos/trendyol.png',
        url: 'https://www.trendyol.com/magaza/dailyshot-m-763181?channelId=1&sst=0&sk=1',
        descKey: 'salesPoints.trendyolDesc',
        color: '#F27A1A',
    },
    {
        name: 'Dailyshot.com.tr',
        logo: '/logos/dailyshotlogo.png',
        url: 'https://www.dailyshot.com.tr/',
        descKey: 'salesPoints.dailyshotDesc',
        color: '#00A3E0',
    },
    {
        name: 'Eczane Satış Noktaları',
        logo: '/logos/eczane.png',
        url: 'https://www.dailyshot.com.tr/sayfa/eczane-satis-noktalari',
        descKey: 'salesPoints.eczaneDesc',
        color: '#4CAF50',
    },
];

const SalesPointsModal = ({ open, onOpenChange }: SalesPointsModalProps) => {
    const { t } = useTranslation();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg bg-slate-900 border-slate-700 text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-poppins">{t('salesPoints.title')}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {salesPoints.map((point) => (
                        <a
                            key={point.name}
                            href={point.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-700
                         hover:shadow-lg transition-all duration-300
                         hover:border-health-primary bg-slate-800/50 hover:bg-slate-800"
                        >
                            <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white p-1.5 flex items-center justify-center">
                                <img src={point.logo} alt={point.name} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-base">{point.name}</h3>
                                <p className="text-sm text-slate-400">{t(point.descKey)}</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        </a>
                    ))}
                </div>
                <div className="border-t border-slate-700 pt-4">
                    <Link
                        to="/health/satis-noktalari"
                        onClick={() => onOpenChange(false)}
                        className="text-sm text-health-primary hover:underline"
                    >
                        {t('salesPoints.viewAll')} →
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SalesPointsModal;
