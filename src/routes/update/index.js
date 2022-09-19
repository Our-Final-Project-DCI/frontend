import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";

// Images

import avatar from "./images/avatar.webp";

// Icons
import { BiPencil } from "react-icons/bi";

export default function Update() {
  const submitHander = (e) => {
    e.preventDefault();
  };

  return (
    <LayoutLogout>
      <div className="Update-User-Profile">
        <div className="user">
          <div className="avatar">
            <a href="/account">
              <img src={avatar} alt="" className="hover_opacity" />
            </a>
          </div>
          <h3>username</h3>
        </div>
        <div className="wrapper">
          <form className="updateform" onSubmit={submitHander}>
            <div className="input-group">
              <div className="avatar-box">
                <div className="avatar">
                  <img src={avatar} alt="" />
                </div>
                <a href="/update">
                  <BiPencil />
                </a>

                <button>Update profileimage</button>
              </div>
              <div className="item">
                <span>gender</span>
                <select>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div className="item">
                <span>fullname</span>
                <input type="text" placeholder="Fullname" name="name" />
              </div>

              <div className="item">
                <span>username</span>
                <input type="text" placeholder="username" name="username" />
              </div>

              <div className="item">
                <span>city</span>
                <input type="text" placeholder="city" name="city" />
              </div>

              <div className="item">
                <span>land</span>
                <input type="text" placeholder="Land" name="country" />
              </div>

              <div className="item">
                <span>bio:</span>
                <textarea placeholder="about" />
              </div>
              <div className="item">
                <span>socialmedia</span>

                <div className="social">
                  <a href="">Twitter</a>
                  <a href="">Facebook</a>
                  <a href="">Instagram</a>
                </div>
              </div>
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </LayoutLogout>
  );
}
