import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";

//Import Components here
import SearchBar from "./SearchBar";

const App = () => {
  // START : Getting the Current position to set as Map Default
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos.coords);
      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);
  // END : Getting the Current position to set as Map Default

  function FlyToLocation({ position }) {
    const map = useMap();

    useEffect(() => {
      if (position) {
        map.flyTo([position.latitude, position.longitude], 13);
      }
    }, [position, map]);

    return null;
  }

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-green-100 border-r border-black p-4">
        <h2 className="text-xl font-bold mb-4">SideBar</h2>
        <SearchBar setPosition={setPosition} />
      </div>

      {/* Map Area */}
      <div className="w-5/6">
        {/*Ternary operator to load the map only when there is a position*/}
        {position ? (
          <MapContainer
            center={[position.latitude, position.longitude]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <FlyToLocation position={position} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.latitude, position.longitude]}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p className="text-center mt-10">Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default App;
