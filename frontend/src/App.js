import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./toolkit/atoms/Atoms";
import Dashboard from "./toolkit/admin/pages/Dashboard";
import Manage from "./toolkit/admin/pages/Manage";
import Home from "./toolkit/user/pages/Home";
import Movie from "./toolkit/user/pages/Movie";
import Contact from "./toolkit/user/pages/Contact";
import Login from "./toolkit/componet/Login";
import Register from "./toolkit/componet/Register";
import { useEffect, useState } from "react";
import axios from "axios";

function getCookie(name) {
  let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

const App = () => {
  const [role, setrole] = useState(null)

  let token = getCookie('token');
  console.log(token);

  let config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  let getData = async () => {
    try {
      let res = await axios.get("http://localhost:3001/v1/user/profile", config);
      setrole(res.data.user.role);
      console.log(res);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }

  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/register';

  useEffect(() => {
    if (!hideNavbar) {
      getData();
    }
  }, [hideNavbar]); // Only call getData when the route is not login or register

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/home" element={role == "user" ? <About /> : <Navigate to={"/"} />} />

      </Routes>
    </>
  );
}

let About = () => {
  return (
    <>
      <Navbar />
      <Route path="/home" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
}


export default App;
