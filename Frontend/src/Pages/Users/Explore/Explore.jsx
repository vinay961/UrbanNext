import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaSearch } from "react-icons/fa";

const sampleRooms = [
  {
    id: 1,
    title: "Spacious 1BHK in City Center",
    location: "Connaught Place, Delhi",
    price: 12000,
    type: "1BHK",
    available: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Cozy PG for Students",
    location: "Koramangala, Bangalore",
    price: 8000,
    type: "PG",
    available: true,
    image:
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "2BHK with Balcony",
    location: "Baner, Pune",
    price: 15000,
    type: "2BHK",
    available: false,
    image:
      "https://images.unsplash.com/photo-1628744442257-42e1c4b1a5df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Luxury Studio Apartment",
    location: "Bandra, Mumbai",
    price: 25000,
    type: "Studio",
    available: true,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
];

function ExplorePage() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(30000);
  const [roomType, setRoomType] = useState("");
  const [availability, setAvailability] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredRooms = sampleRooms.filter((room) => {
    return (
      room.location.toLowerCase().includes(search.toLowerCase()) &&
      room.price <= maxPrice &&
      (roomType ? room.type === roomType : true) &&
      (!availability || room.available)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Explore Rooms
      </h1>

      <div className={`lg:hidden mb-6 ${isScrolling ? "sticky top-0 z-40 bg-white pb-4 shadow-md" : ""}`}>
        <button
          onClick={() => setShowFilters(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium"
        >
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        <aside className="hidden lg:block bg-white p-6 rounded-2xl shadow-md lg:col-span-1 lg:sticky lg:top-24 h-fit">
          <FilterContent
            search={search}
            setSearch={setSearch}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            roomType={roomType}
            setRoomType={setRoomType}
            availability={availability}
            setAvailability={setAvailability}
          />
        </aside>

        <main className="lg:col-span-3">
          {filteredRooms.length ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-44 object-cover"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full text-white ${
                        room.available ? "bg-green-600" : "bg-red-500"
                      }`}
                    >
                      {room.available ? "Available" : "Unavailable"}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-1">
                      {room.title}
                    </h3>

                    <p className="text-sm text-gray-500 flex items-center mb-2">
                      <FaMapMarkerAlt className="mr-2 text-red-500" />
                      {room.location}
                    </p>

                    <div className="flex justify-between items-center mb-4">
                      <p className="text-blue-600 font-bold text-lg flex items-center">
                        <FaRupeeSign className="mr-1" />
                        {room.price}
                      </p>
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                        {room.type}
                      </span>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No rooms match your filters.
            </p>
          )}
        </main>
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500"
              >
                Close
              </button>
            </div>

            <FilterContent
              search={search}
              setSearch={setSearch}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              roomType={roomType}
              setRoomType={setRoomType}
              availability={availability}
              setAvailability={setAvailability}
            />

            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterContent({
  search,
  setSearch,
  maxPrice,
  setMaxPrice,
  roomType,
  setRoomType,
  availability,
  setAvailability,
}) {
  return (
    <>
      <div className="mb-5">
        <label className="text-sm text-gray-500 mb-1 block">Location</label>
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            value={search}
            placeholder="Bangalore..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="text-sm text-gray-500 mb-1 block">Max Budget</label>
        <input
          type="range"
          min="5000"
          max="30000"
          step="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <p className="mt-2 text-sm font-semibold flex items-center">
          <FaRupeeSign className="mr-1" />
          {maxPrice}
        </p>
      </div>

      <div className="mb-5">
        <label className="text-sm text-gray-500 mb-1 block">Room Type</label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
        >
          <option value="">All</option>
          <option value="PG">PG</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="Studio">Studio</option>
        </select>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
        <label>Available only</label>
      </div>
    </>
  );
}

export default ExplorePage;
