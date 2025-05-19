import React from "react";
import "./PathHero.css";
import { Link } from "react-router-dom";

const PathHero = ({ title, subtitle, setTabType }) => {
  return (
    <div className="PathHero">
      <div>
        <h1 style={{ fontSize: "40px" }}>Lessons</h1>
      </div>
      <div>
        <h5>
          <Link to="/" style={{color:"white"}}>Home</Link>
          {subtitle && <Link to="/products"> / Products</Link>}&nbsp;/&nbsp;
          {title}&nbsp;
          <span style={{ color: "#ff8b00", fontWeight: "800" }}>
            {setTabType}
          </span>{" "}
        </h5>
      </div>
    </div>
  );
};

export default PathHero;
