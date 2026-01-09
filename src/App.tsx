import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrandProvider } from "./context/BrandContext";
import Layout from "./components/layout/Layout";
import GatewayPage from "./pages/GatewayPage";
import HealthHome from "./pages/HealthHome";
import HealthProducts from "./pages/HealthProducts";
import HealthAbout from "./pages/HealthAbout";
import MiceHome from "./pages/MiceHome";
import TeamPage from "./pages/TeamPage";
import ComparePage from "./pages/ComparePage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import "./lib/i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrandProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<GatewayPage />} />
              <Route path="/health" element={<HealthHome />} />
              <Route path="/health/urunler" element={<HealthProducts />} />
              <Route path="/health/hakkinda" element={<HealthAbout />} />
              <Route path="/mice" element={<MiceHome />} />
              <Route path="/mice/etkinlikler" element={<MiceHome />} />
              <Route path="/mice/iletisim" element={<MiceHome />} />
              <Route path="/ekip" element={<TeamPage />} />
              <Route path="/familyamiz" element={<TeamPage />} />
              <Route path="/karsilastir" element={<ComparePage />} />
              <Route path="/legal/:type" element={<LegalPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </BrandProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
