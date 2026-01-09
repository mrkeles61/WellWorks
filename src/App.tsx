import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrandProvider } from "./context/BrandContext";
import Layout from "./components/layout/Layout";
import GatewayPage from "./pages/GatewayPage";
import HealthHome from "./pages/HealthHome";
import MiceHome from "./pages/MiceHome";
import TeamPage from "./pages/TeamPage";
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
              <Route path="/health/urunler" element={<HealthHome />} />
              <Route path="/health/hakkinda" element={<HealthHome />} />
              <Route path="/mice" element={<MiceHome />} />
              <Route path="/mice/etkinlikler" element={<MiceHome />} />
              <Route path="/mice/iletisim" element={<MiceHome />} />
              <Route path="/ekip" element={<TeamPage />} />
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
