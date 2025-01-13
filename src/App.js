import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "./authentification_page";
import AreaPage from "./AreaPage";
import ConfigureArea from "./ConfigureArea";
import ServicesPage from "./ServicePage";

function App() {
  const isAuthenticated = true; // Simule l'authentification

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/Area" element={isAuthenticated ? <AreaPage /> : <Navigate to="/" />} />
        <Route path="/configure-area" element={isAuthenticated ? <ConfigureArea /> : <Navigate to="/" />} />
        <Route path="/services" element={<ServicesPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
