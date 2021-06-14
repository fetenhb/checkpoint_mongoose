import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
const Nav = () => {
  return (
    <div>
      {" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button id="foot" style={{ marginBottom: "20px", marginTop: "20px" }}>
          <Link to="/AddPerson" style={{ textDecoration: "none" }}>
            {" "}
            <button class="button-os">
              <a href="#">add person</a>
            </button>{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
