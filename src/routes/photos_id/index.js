import React from "react";

// Images
import "./index.scss";
import avatar from "./images/avatar.webp";
import f1 from "./images/f1.jpg";
// Icons
// Icons
import { BiHeart } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";

export default function Photo() {
  //const params = useParams();
  const [photo, setPhoto] = React.useState(null);
  const [comment, setComment] = React.useState("");
  return (
    <div className="Photos-Id-Route">
      <div className="wrapper">
        <div className="user">
          <div className="avatar">
            <a href="/account">
              <img src={avatar} alt="" className="hover_opacity" />
            </a>
          </div>
          <h3>username</h3>
        </div>

        <div className="user-actions">
          <button className="download-btn">download</button>
          <div className="likes">
            <span className="total">
              <em>200</em>
            </span>
            <span className="like-btn">
              <a href="/">
                <BiHeart />
              </a>
            </span>
          </div>
        </div>

        <div className="user-photo">
          <img src={f1} alt="" />
        </div>

        <div className="comment-section">
          <form action="">
            <div className="user-comment">
              <div className="user">
                <a href="/account">
                  <img src="" alt="" className="hover_opacity" />
                </a>
              </div>
              <input type="text" placeholder="Type comment hier..." />
            </div>
          </form>
          <div className="user-comments">
            <div className="user">
              <img src="" alt="" className="hover_opacity" />
            </div>
            <div className="comment">
              <h4>User 1</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                beataee!
              </p>
            </div>
            <input type="text" placeholder="Type comment hier..." />
          </div>
        </div>
      </div>
    </div>
  );
}
