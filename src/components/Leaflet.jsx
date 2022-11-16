import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Leaflet = () => {
  return (
    <>
      <div className='leaflet'>
        <MapContainer
          center={[48.69138795161701, -1.8580762864313891]}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[48.69138795161701, -1.8580762864313891]}>
            <Popup>
              Joshua Dupin
              <br />
              35260 Cancale
              <br />
              joshua35260@gmail.com
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default Leaflet
