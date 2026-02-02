import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../components/product.jsx";
import ReduxUse from "../components/reduxUse.jsx";
import LocationPicker from "../components/map/loaction.jsx";


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
      <ReduxUse/>
    </div>
    <br />
    <div>
        <Product/>
    </div>
    <br />
    <div>
      <LocationPicker/>
    </div>
    </>
  );
};

export default About;