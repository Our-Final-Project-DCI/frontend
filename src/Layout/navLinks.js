import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { FaUserCircle } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className="Nav">
      <div className="Nav__item">
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div className="Nav__item">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="Nav__item">
        <Link className="link" to="/category">
          Categores
        </Link>
      </div>
      <div className="Nav__item">
        <Link className="link" to="/login">
          Sign Up / Login
        </Link>
      </div>

      <div className="Nav__item">
        <Link className="link" to="/account">
          <FaUserCircle className="" />
        </Link>
      </div>
      <div className="Nav__item">
        <button className="Header__upload">
          <Link className="link" to="/upload-photo">
            Upload
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
