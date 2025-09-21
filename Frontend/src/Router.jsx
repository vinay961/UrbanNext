import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import HomePage from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ExplorePage from "./Pages/Explore/Explore.jsx";
import RoomDetails from "./Pages/Details/Details.jsx";

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
                {/* Add more routes here as needed */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;
