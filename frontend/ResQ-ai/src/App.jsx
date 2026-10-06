import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingScene from "./scenes/LandingScene";
import Login from "./authpage/Login";
import Signup from "./authpage/Signup";
import VerifyEmail from "./authpage/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingScene />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Email Verification */}
        <Route path="/verify-email" element={<VerifyEmail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;