import {useState} from "react"
import {MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'
// @ts-ignore
import {icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ICON = icon({
    iconUrl: '/images/marker.png?webp',
    iconSize: [32, 32],
})

type mapProps = {
    mapContainerStyle?: {}
}

const Map = ({mapContainerStyle = {height: 400, width: "100%"}}: mapProps) => {
    const [map, setMap] = useState(null)
    const center = [46.9043031888235, 19.693496786506692]

    const flyTo = () => {
        if (map) {
            // @ts-ignore
            map.flyTo(center,
                15,
                {
                    duration: 1,
                }
            )
        }
    }

    return (
        <>
            <p className="text-lg text-center my-5 cursor-pointer" onClick={flyTo}>
                <span className="font-medium uppercase">Helyszín: </span>
                Kecskemét 6000, Trombita utca 2. GPS: 46.9043031888235, 19.693496786506692
            </p>
            <div className="drop-shadow-lg">
                <MapContainer
                    fullscreenControl={true}
                    center={center}
                    zoom={15}
                    // maxZoom={16}
                    scrollWheelZoom={false}
                    whenCreated={setMap}
                    style={mapContainerStyle}>
                    <TileLayer
                        // @ts-ignore
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?webp"

                        //Esri.WorldGreyCanvas
                        // attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                        // url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"

                        //CartoDB.Pos
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?webp"
                    />
                    <Marker
                        // @ts-ignore
                        icon={ICON}
                        position={center}>
                        <Popup>
                            <p className="font-medium">Skyline-Computer Kft.</p>
                            <p>Kecskemét 6000, Trombita utca 2.</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}


export default Map
