import React from "react";

function ContactUs() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have questions, feedback, or partnership opportunities? 
            We’d love to hear from you. Reach out to us using the 
            form or contact details below.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <strong>Address:</strong> 123 UrbanNext Street, New Delhi, India
            </p>
            <p>
              📧 <strong>Email:</strong> support@urbannext.com
            </p>
            <p>
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
