import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Login from "./Pages/Users/Login/Login.jsx";
import Register from "./Pages/Users/Register/Register.jsx";
import HomePage from "./Pages/Users/Home/Home.jsx";
import About from "./Pages/Users/About/About.jsx";
import Contact from "./Pages/Users/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ExplorePage from "./Pages/Users/Explore/Explore.jsx";
import RoomDetails from "./Pages/Users/Details/Details.jsx";
import ClientDashboard from "./Pages/Clients/Dashboard.jsx";
import MyListings from "./Pages/Clients/Listing.jsx";
import AddRoom from "./Pages/Clients/AddRoom.jsx";

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/rooms" element={<RoomDetails />} />
                
                <Route path="/client/dashboard" element={<ClientDashboard />} />
                <Route path="/client/listings" element={<MyListings />} />
                <Route path="/client/add-room" element={<AddRoom />} />
                {/* Add more routes here as needed */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;
