import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./logo/modern_logo.png";
import "./index.scss";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import NavLinks from "./navLinks";
import { CgClose } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import useSearch from "../hooks/useSearch";

const Mobile = () => {
  const [open, setOpen] = useState(false);
  const search = useSearch();

  const hamburgerIcon = (
    <CgMenu
      className="Hamburger"
      size="30px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className="Close"
      size="30px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className="Mobile">
      <div className="Header">
        <div className="Header__logo">
          <Link className="link" to="/">
            <img src={Logo} alt="logo" className="Header__png" />
          </Link>
        </div>
        <div className="Logout__search">
          <div className="Logout__border">
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              className="Logout__input"
              value={search.search}
              onChange={(e) => search.setSearch(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="Header__wrapper">
          {open ? closeIcon : hamburgerIcon}
          {open && <NavLinks />}
        </div>
      </div>
    </nav>
  );
};

export default Mobile;
