import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./logo/modern_logo.png";
import { FaUserCircle } from "react-icons/fa";
import "./index.scss";
import useUser from "../hooks/useUser";

const Navigation2 = () => {
  const user = useUser();

  console.log(user);

  const handleLogout = async () => {
    await user.logout();
  };
  return (
    <nav className="Navigation">
      <div className="Header">
        <div className="Header__logo">
          <Link className="link" to="/">
            <img src={Logo} alt="logo" className="Header__png" />
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
              Categories
            </Link>
          </div>
          <div className="Header__item">
            <Link className="link" to="/login" onClick={handleLogout}>
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
    </nav>
  );
};

export default Navigation2;
