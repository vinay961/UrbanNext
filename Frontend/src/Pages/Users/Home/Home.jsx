import React from "react";
import { useSelector } from "react-redux";
import { Search, MapPin, Home, Users } from "lucide-react";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const { role } = useSelector((state) => state.auth);
  console.log(role);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Room in the City
          </h1>
          <p className="text-lg md:text-xl mb-8">
            UrbanNext makes it easy to discover affordable rooms, flats, and PGs
            in your preferred location.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by area or city..."
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium flex items-center gap-2">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Areas to Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Delhi", "Bangalore", "Mumbai", "Pune", "Hyderabad", "Chennai"].map(
            (city) => (
              <div
                key={city}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 cursor-pointer"
              >
                <MapPin className="text-blue-600 mb-3" size={28} />
                <h3 className="text-xl font-semibold">{city}</h3>
                <p className="text-gray-500">Browse rooms available in {city}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why UrbanNext */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose UrbanNext?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md">
              <Home className="text-blue-600 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-gray-600">
                Every room is verified to make your search safe and reliable.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md">
              <Users className="text-blue-600 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Trusted Owners</h3>
              <p className="text-gray-600">
                Connect with verified landlords and roommates directly.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md">
              <MapPin className="text-blue-600 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">City Coverage</h3>
              <p className="text-gray-600">
                Explore rooms across all major Indian cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Your Next Room?
        </h2>
        <p className="mb-8 text-lg">
          Join thousands of people who have already found their perfect room with UrbanNext.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition" onClick={() => window.location.href = user ? (role === 'client' ? '/owner/dashboard' : '/explore') : '/register'}>
          Get Started
        </button>
      </section>
    </div>
  );
}

export default HomePage;
