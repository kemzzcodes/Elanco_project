import {
    MapBox,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

import { dummySightings } from "../mockdata/dummySightings";
import "leaflet/dist/leaflet.css";

function TickMap() {
    return (
        <MapBox 
        center={[44.6, -110.5]} 
        zoom={5} 
        style={{ height: "500px", width: "100%" }}>
            
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {dummySightings.map((sighting) => (
                <Marker key={sighting.id} position={[sighting.lat, sighting.long]}>
                    <Popup>
                        <p><strong>{sighting.species}</strong></p>
                        <p>{sighting.location}</p>
                        <p>{sighting.date} at {sighting.time}</p>
                        <p>{sighting.observer}</p>
                        <p>{sighting.notes}</p>
                    </Popup>
                </Marker>
            ))} 
        </MapBox>
    );
}

export default TickMap;