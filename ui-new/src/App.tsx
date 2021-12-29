import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Fetcher from "./pages/Fetcher";
import LandingPage from "./pages/LandingPage";
import Verifier from "./pages/Verifier";

function App() {
  return (
    <div className="px-8 md:px-12 lg:px-24 flex min-h-screen pb-8 text-gray-800 bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/verifier" element={<Verifier />} />
          <Route path="/fetcher" element={<Fetcher />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
