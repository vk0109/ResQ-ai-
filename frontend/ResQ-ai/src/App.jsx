import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./authpage/Login";
import Signup from "./authpage/Signup";
import VerifyEmail from "./authpage/VerifyEmail";

import LandingScene from "./scenes/LandingScene";
import AppShell from "./app/AppShell";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing website */}
        <Route path="/" element={<LandingScene />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Actual installed PWA */}
        <Route path="/app" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;