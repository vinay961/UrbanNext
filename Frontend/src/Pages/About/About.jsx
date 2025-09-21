import React from "react";

function About() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image / Illustration */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
            alt="UrbanNext About"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About <span className="text-blue-600">UrbanNext</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            UrbanNext is a modern platform designed to help students, 
            professionals, and families easily find affordable rooms, 
            PGs, and flats in major cities. We aim to simplify the 
            house-hunting process by connecting seekers with verified 
            landlords and trusted listings.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            With our user-friendly interface, powerful search filters, 
            and city-wide coverage, UrbanNext is committed to solving 
            one of the biggest problems faced in urban areas — finding 
            a reliable place to live.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              ✅ Verified Listings for your safety
            </li>
            <li className="flex items-center gap-3">
              ✅ Affordable rooms in major cities
            </li>
            <li className="flex items-center gap-3">
              ✅ Easy communication with owners
            </li>
            <li className="flex items-center gap-3">
              ✅ Transparent and secure process
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
