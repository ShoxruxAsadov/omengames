import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Login from "./routes/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
