import React from "react";

function About() {
  return (
    <section className="bg-gray-50">
      
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
              alt="UrbanNext About"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-blue-600">UrbanNext</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              UrbanNext is a modern housing discovery platform designed for
              students, working professionals, and families looking for
              affordable rooms, PGs, and flats in urban cities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We simplify the house-hunting process by connecting seekers with
              verified landlords, ensuring transparency, safety, and ease at
              every step.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Our Mission & Vision
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to make urban accommodation accessible, affordable,
            and trustworthy for everyone. We envision a future where finding a
            home in a new city is simple, stress-free, and fully digital.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
