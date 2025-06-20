import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function SearchBar({ setPosition }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    try {
      const response = await fetch()
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border border-black bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold text-black">Search City</h2>

      <input
        name="city"
        type="text"
        placeholder="Enter city name..."
        className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
      >
        Search
      </button>
    </form>
  );
}
