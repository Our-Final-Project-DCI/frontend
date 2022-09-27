import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";

// Images
// fetch get by id
// Icons
import { BiHeart } from "react-icons/bi";

export default function Photo() {
  //const params = useParams();
  const [photo, setPhoto] = React.useState(null);
  console.log(photo);
  //const [comment, setComment] = React.useState("");

  return (
    <LayoutLogout>
      <div className="Photos-Id-Route">
        <div className="user">
          <div className="avatar">
            <a href="/account">
              <img src="" alt="" className="hover_opacity" />
            </a>
          </div>
          <h3>username</h3>
        </div>
        <div className="wrapper">
          <div className="user-actions">
            <button className="download-btn">download</button>
            <div className="likes">
              <span className="total">
                <em>200</em>
              </span>
              <button className="like-btn">
                <a href="/">
                  <BiHeart />
                </a>
              </button>
            </div>
          </div>

          <div className="user-photo">
            <img src={`http://localhost:3007/"+ ${photo.photoFile}`} alt="" />
          </div>

          <section className="comment-section">
            <form action="">
              <div className="user-comment">
                <div className="avatar">
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
              <div className="comments">
                <h4>User 1</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                  beataee!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutLogout>
  );
}
