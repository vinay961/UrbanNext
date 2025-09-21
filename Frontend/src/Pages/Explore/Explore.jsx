import React, { useState } from "react";
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
  {
    id: 5,
    title: "Affordable PG for Girls",
    location: "Sector 62, Noida",
    price: 6000,
    type: "PG",
    available: true,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Modern 1BHK Apartment",
    location: "Whitefield, Bangalore",
    price: 18000,
    type: "1BHK",
    available: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

function ExplorePage() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(30000);
  const [roomType, setRoomType] = useState("");
  const [availability, setAvailability] = useState(false);

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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Explore Rooms</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="bg-white p-6 rounded-xl shadow-md lg:col-span-1 h-fit">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Search</label>
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="City or Area..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Max Price</label>
            <input
              type="range"
              min="5000"
              max="30000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="mt-2 font-semibold text-gray-800 flex items-center">
              <FaRupeeSign className="mr-1" />
              {maxPrice}
            </p>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="">All</option>
              <option value="PG">PG</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={availability}
              onChange={(e) => setAvailability(e.target.checked)}
            />
            <label className="text-gray-600">Show Available Only</label>
          </div>
        </aside>

        <main className="lg:col-span-3">
          {filteredRooms.length > 0 ? (
            <div className="overflow-x-auto">
              <div className="grid grid-rows-2 grid-flow-col gap-6 w-max">
                {filteredRooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-72"
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">{room.title}</h2>
                      <p className="flex items-center text-gray-600 mb-1">
                        <FaMapMarkerAlt className="mr-2 text-red-500" />
                        {room.location}
                      </p>
                      <p className="flex items-center font-bold text-gray-800 mb-2">
                        <FaRupeeSign className="mr-1" />
                        {room.price} / month
                      </p>
                      <p
                        className={`text-sm font-medium mb-3 ${
                          room.available ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {room.available ? "Available" : "Not Available"}
                      </p>
                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center">No rooms match your filters.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default ExplorePage;
