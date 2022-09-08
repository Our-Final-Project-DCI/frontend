import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Header(props) {
  return (
    <div className="Layout">
      <div className="Header">
        <div className="Header__logo">
          <Link className="link" to="/">
            <span className="photo">Photo</span>gram
          </Link>
        </div>
        <div className="Header__wrapper">
          <div className="Header__item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="Header__item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="Header__item">
            <Link className="link" to="/category">
              Categores
            </Link>
          </div>
          <div className="Header__item">
            <Link className="link" to="/login">
              Sign Up / Login
            </Link>
          </div>
          <div className="Header__item">
            <button className="Header__upload">
              <Link className="link" to="/upload-photo">
                Upload
              </Link>
            </button>
          </div>
          <div>
            <span class="material-symbols-outlined"></span>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
