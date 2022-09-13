import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./logo/modern_logo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function LayoutLogout(props) {
  return (
    <div className="Layout-Logout">
      <div className="Header">
        <div className="Header__logo">
          <Link className="link" to="/">
            <img src={Logo} alt="logo" className="Header__png" />
          </Link>
        </div>
        {/* <div className="Header__search">
          <div className="border">
            <FaSearch />
            <input type="text" placeholder="Search" className="input"></input>
          </div>
        </div> */}

        <div class="search-container">
          <form action="/category">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <FaSearch></FaSearch>
            </button>
          </form>
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
              Categories
            </Link>
          </div>
          <div className="Header__item">
            <Link className="link" to="/login">
              Logout
            </Link>
          </div>
          <div className="Header__item">
            <button className="Header__upload">
              <Link className="link" to="/upload-photo">
                Upload
              </Link>
            </button>
          </div>
          <div className="Header__item">
            <Link className="link" to="/account">
              <FaUserCircle />
            </Link>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
