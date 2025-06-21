
import axios from "axios";

export default function SearchBar({ setPosition }) {

  async function fetchLocation(city) {
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: city,
            format: "jsonv2",
            limit: 1,
            addressdetails: 1,
          },
        }
      );

      const data = response.data;
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setPosition({ latitude: parseFloat(lat), longitude: parseFloat(lon) });

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);
      } else {
        console.log("No results found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    await fetchLocation(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border border-black bg-white rounded-md shadow-md"
    >
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
