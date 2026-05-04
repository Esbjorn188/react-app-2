import { useEffect, useRef } from "react"

import L from "leaflet"
import "leaflet/dist/leaflet.css"


const LeafletMap = ( {lat = 10, lon = 56, weathertext = "" } ) => {

    const refMapContainer = useRef()
    const refMap = useRef()
    const refMarker = useRef()

    // bygger kortet første gang - skaber kortet
    useEffect(() => {
      
        if (!refMap.current) {

            //initialiserer vi kortet/map
            refMap.current = L.map(refMapContainer.current).setView([lat, lon], 12);

            // tilføjer vi kort-fliser til det skabte kort
            L.tileLayer( 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            } ).addTo( refMap.current );

            //tilføjer en markør/marker som en peger på lat lon
            refMarker.current = L.marker([lat, lon]).addTo(refMap.current).bindPopup(weathertext).openPopup()
        }
    
    }, [])

    // skifter info eksisterende kort - når ændring i lat eller lon
    useEffect(() => {
      
        // kortet finder og denne kaldes fordi der er ændringer til lat/lon
        if (refMap.current) {

            refMap.current.setView ( [ lat, lon ], 12 )

            refMarker.current.setLatLng( [ lat, lon ] ).bindPopup(weathertext).openPopup()

        }

    }, [lat, lon])
    
    
  return (
    <section className="p-6">

        <div ref={ refMapContainer } className="w-full" style={{minHeight: "320px"}}></div>

    </section>
  )
}

export default LeafletMap