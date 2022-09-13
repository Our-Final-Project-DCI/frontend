import React from "react";
import "./index.scss";
import Layout from "../../Layout";

// Images

import avatar from "./images/avatar.webp";
import f1 from "./images/f1.jpg";

// Icons
import { BiPencil } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";

// Carousel

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Account() {
  // Carousel- responsive:

  const responsive = {
    xlDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout>
      <div className="User-Account-Route">
        <div className="wrapper">
          <div className="user-profile">
            <div className="avatar-box">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <a href="/upload-photo">
                <BiPencil />
              </a>
            </div>
            <div className="about-box">
              <div className="user">
                <h2>Username</h2>
                <div className="user-icons">
                  <a href="/">
                    <BiUserPlus />
                  </a>
                  <a href="/">
                    <BiShareAlt />
                  </a>
                </div>
              </div>

              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                aut ut nam !psum dolor sit amet consectetur adipisicing elit.
                Ipsa aut ut nam !
              </p>
              <div className="socialMedia">
                <ul>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="user-collections">
            <ul>
              <li>
                <a href="/"> MY PHOTOS</a>
              </li>
              <li>
                <a href="/"> LIKED PHOTOS </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="user-photos">
          <Carousel responsive={responsive} className="slider">
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
          </Carousel>
        </div>
      </div>
    </Layout>
  );
}
