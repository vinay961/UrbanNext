import React from "react";
import {
  FaHome,
  FaPlus,
  FaList,
  FaEnvelope,
  FaCog,
  FaEye,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

const data = [
  { name: "Active", value: 8 },
  { name: "Pending", value: 3 },
  { name: "Closed", value: 5 },
];

function ClientDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">UrbanNext</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
            <FaHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
            <FaList /> My Listings
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
            <FaPlus /> Add Room
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
            <FaEnvelope /> Messages
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
            <FaCog /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
            <FaEye className="text-blue-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Views</p>
              <h2 className="text-2xl font-bold">12,450</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
            <FaCheckCircle className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Active Listings</p>
              <h2 className="text-2xl font-bold">8</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
            <FaClock className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Pending Approvals</p>
              <h2 className="text-2xl font-bold">3</h2>
            </div>
          </div>
        </div>

        {/* Analytics & Recent Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Analytics */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Listings Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-around mt-4">
              {data.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: COLORS[idx] }}
                  ></div>
                  <p className="text-sm text-gray-600">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Listings */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-3">Title</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Luxury Studio</td>
                  <td className="p-3">Bandra, Mumbai</td>
                  <td className="p-3">₹25,000</td>
                  <td className="p-3 text-green-600 font-medium">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">2BHK Apartment</td>
                  <td className="p-3">Baner, Pune</td>
                  <td className="p-3">₹15,000</td>
                  <td className="p-3 text-yellow-500 font-medium">Pending</td>
                </tr>
                <tr>
                  <td className="p-3">PG for Students</td>
                  <td className="p-3">Koramangala, Bangalore</td>
                  <td className="p-3">₹8,000</td>
                  <td className="p-3 text-green-600 font-medium">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientDashboard;
