import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    );
}

export default AppRouter;
