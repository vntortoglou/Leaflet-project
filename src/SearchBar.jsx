export default function SearchBar() {
  return (
    <form className="flex flex-col gap-4 p-4 border border-black bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold text-black">Search City</h2>
      
      <input
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
