import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//Import Components here
import SearchBar from "./SearchBar";





const App = () => {
  return (
    <div className="flex h-screen w-screen">


      {/* Sidebar */}
      <div className="w-1/6 bg-green-100 border-r border-black p-4">
        <h2 className="text-xl font-bold mb-4">SideBar</h2>
        {/* Add your components here */}
        <SearchBar></SearchBar>

      </div>

      {/* Map Area */}
      <div className="w-5/6">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>London calling!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
