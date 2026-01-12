import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrandProvider } from "./context/BrandContext";
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import GatewayPage from "./pages/GatewayPage";
import HealthHome from "./pages/HealthHome";
import HealthAbout from "./pages/HealthAbout";
import DailyshotNedirPage from "./pages/DailyshotNedirPage";
import HealthContactPage from "./pages/HealthContactPage";
import ElectrovitNedirPage from "./pages/ElectrovitNedirPage";
import MiceHome from "./pages/MiceHome";
import MiceAbout from "./pages/MiceAbout";
import StoreLocatorPage from "./pages/StoreLocatorPage";
import WorksPage from "./pages/WorksPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import "./lib/i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrandProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<GatewayPage />} />
                <Route path="/health" element={<HealthHome />} />
                <Route path="/health/hakkimizda" element={<HealthAbout />} />
                <Route path="/dailyshot-nedir" element={<DailyshotNedirPage />} />
                <Route path="/health/iletisim" element={<HealthContactPage />} />
                <Route path="/health/electrovit-nedir" element={<ElectrovitNedirPage />} />
                <Route path="/mice" element={<MiceHome />} />
                <Route path="/mice/hakkimizda" element={<MiceAbout />} />
                <Route path="/mice/isler-gucler" element={<WorksPage />} />
                <Route path="/mice/etkinlikler" element={<MiceHome />} />
                <Route path="/mice/iletisim" element={<ContactPage />} />
                <Route path="/iletisim" element={<ContactPage />} />
                <Route path="/ekip" element={<TeamPage />} />
                <Route path="/familyamiz" element={<TeamPage />} />
                <Route path="/legal/:type" element={<LegalPage />} />
                <Route path="/health/satis-noktalari" element={<StoreLocatorPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ErrorBoundary>
      </BrandProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
