import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react"; 

import Stopwatch from "../components/StopWatch.jsx";
import Counter from "../components/useState.jsx";
import ThemeToggle from "../components/ThemeButton.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import {lazy} from 'react'
import MyMap from '../components/map/map.jsx'

const jwt = import.meta.env.VITE_JWT;
console.log(jwt);
const Home = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Stopwatch />
      <br /><br />

      <Counter />
      <br /><br />
      <div>
        <h3>{theme.toUpperCase()} MODE</h3>
      </div>

      <nav>
        <Link to="/about">About Us</Link>
        <br /><br />

        <Link to="/ControlledForm">Controlled Form</Link>
        <br /><br />

        <Link to="/product">Product</Link>
        <br /><br />

        <ThemeToggle />
      </nav>

      <br /><br />

      <button onClick={() => navigate("/about")}>
        Click Me
      </button>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>
      <br />
      <div><MyMap /></div>
    </div>
  );
};

export default Home;
