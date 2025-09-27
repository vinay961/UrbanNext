import React from "react";

function MyListings() {
  // Sample data (replace with real backend data later)
  const listings = [
    {
      id: 1,
      title: "2 BHK Apartment in Delhi",
      location: "Connaught Place, Delhi",
      price: "₹12,000/month",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "Single Room in Bangalore",
      location: "Whitefield, Bangalore",
      price: "₹8,000/month",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "PG Accommodation in Mumbai",
      location: "Andheri West, Mumbai",
      price: "₹6,500/month",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Listings</h2>

      {listings.length === 0 ? (
        <p className="text-gray-500">You haven’t posted any rooms yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{listing.title}</h3>
                <p className="text-sm text-gray-500">{listing.location}</p>
                <p className="text-blue-600 font-bold mt-2">{listing.price}</p>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyListings;
