import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../components/product.jsx";


const About = () => {


  return (
    <>
    <div>
      <h1>About Us</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <br />
    </div>
    <div>
        <Product/>
    </div>
    </>
  );
};

export default About;