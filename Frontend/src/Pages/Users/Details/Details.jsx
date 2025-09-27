import React from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaBed, FaBath, FaWifi } from "react-icons/fa";

const sampleRoom = {
  id: 1,
  title: "Spacious 1BHK in City Center",
  location: "Connaught Place, Delhi",
  price: 12000,
  available: true,
  description:
    "A spacious and well-ventilated 1BHK apartment in the heart of Delhi. Perfect for working professionals and students. Close to metro, shopping centers, and restaurants.",
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599427303058-f04cbcf4756e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1628744442257-42e1c4b1a5df?auto=format&fit=crop&w=800&q=80",
  ],
  amenities: ["1 Bedroom", "1 Bathroom", "Wi-Fi", "Balcony", "Parking"],
};

function RoomDetails() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Cover Image */}
      <div className="w-full h-80 rounded-xl overflow-hidden mb-6">
        <img
          src={sampleRoom.images[0]}
          alt={sampleRoom.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Info */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{sampleRoom.title}</h1>
      <p className="flex items-center text-gray-600 mb-2">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
        {sampleRoom.location}
      </p>
      <p className="flex items-center font-bold text-gray-800 mb-4 text-xl">
        <FaRupeeSign className="mr-1" />
        {sampleRoom.price} / month
      </p>
      <p
        className={`mb-6 font-medium ${
          sampleRoom.available ? "text-green-600" : "text-red-500"
        }`}
      >
        {sampleRoom.available ? "Available Now" : "Currently Unavailable"}
      </p>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {sampleRoom.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition"
          />
        ))}
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{sampleRoom.description}</p>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          {sampleRoom.amenities.map((amenity, index) => (
            <li key={index} className="flex items-center gap-2">
              {amenity.includes("Bedroom") && <FaBed className="text-blue-500" />}
              {amenity.includes("Bathroom") && <FaBath className="text-purple-500" />}
              {amenity.includes("Wi-Fi") && <FaWifi className="text-green-500" />}
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Owner */}
      <div className="text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
          Contact Owner
        </button>
      </div>
    </div>
  );
}

export default RoomDetails;
