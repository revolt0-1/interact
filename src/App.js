// import React from "react";
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Profile from "./Pages/Profile/Profile";
// import Register from "./Pages/Register/Register";

// function App() {
//   return (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/profile/:username" element={<Profile />} />
//     </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  // console.log("user:",user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

