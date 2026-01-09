import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { useBrand } from "@/context/BrandContext";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const { brand } = useBrand();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center px-4",
        brand === "mice" ? "bg-mice-bg" : "bg-background"
      )}
    >
      <div className="text-center">
        <h1
          className={cn(
            "text-8xl font-bold mb-4",
            brand === "mice"
              ? "font-oswald text-mice-primary"
              : "font-poppins text-health-primary"
          )}
        >
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Aradığınız sayfa bulunamadı
        </p>
        <Link
          to="/"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all",
            brand === "mice" ? "btn-mice" : "btn-health"
          )}
        >
          <Home className="w-5 h-5" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
