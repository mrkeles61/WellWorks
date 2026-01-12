import * as React from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { cn } from "@/lib/utils"

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultStyle?: string
    center?: [number, number]
    zoom?: number
}

const Map = React.forwardRef<HTMLDivElement, MapProps>(
    ({ className, defaultStyle = "https://demotiles.maplibre.org/style.json", center = [28.9784, 41.0082], zoom = 11, ...props }, ref) => {
        const mapContainer = React.useRef<HTMLDivElement>(null)
        const map = React.useRef<maplibregl.Map | null>(null)

        React.useEffect(() => {
            if (map.current) return

            if (mapContainer.current) {
                map.current = new maplibregl.Map({
                    container: mapContainer.current,
                    style: defaultStyle,
                    center: center,
                    zoom: zoom,
                })

                // Add controls
                map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
            }

            return () => {
                map.current?.remove()
                map.current = null
            }
        }, [defaultStyle, center, zoom])

        return (
            <div
                ref={mapContainer}
                className={cn("w-full h-full min-h-[400px] relative rounded-md overflow-hidden", className)}
                {...props}
            />
        )
    }
)
Map.displayName = "Map"

export { Map }
