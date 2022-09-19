import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";
import useUser from "../../hooks/useUser";

// Images
import avatar from "./images/avatar.webp";
// Icons
import { BiPencil } from "react-icons/bi";

export default function Update() {
  const [gender, setGender] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [city, setCity] = React.useState("");
  const [land, setLand] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  //const [showSuccess, setShowSuccess] = React.useState(false);
  const user = useUser();

  const updateSubmitHander = async (e) => {
    e.preventDefault();
    const status = await user.update({
      gender: gender,
      avatar: avatar,
    });

    // if (status === 200) {
    //   setShowSuccess(true);

    //   setTimeout(() => {
    //     setShowSuccess(false);
    //   }, 4000);
    // }

    if (status === 200) {
      console.log("done");
    }
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
          <form className="updateform" onSubmit={updateSubmitHander}>
            <div className="input-group">
              <div className="avatar-box">
                <div className="avatar">
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="profile imae"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </div>
                <div>
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
                  <option value="male">{gender}</option>
                  <option value="female">{gender}</option>
                </select>
              </div>
              <div className="item">
                <span>fullname</span>
                <input
                  type="text"
                  placeholder="Fullname"
                  name="name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="item">
                <span>city</span>
                <input
                  type="text"
                  placeholder="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="item">
                <span>land</span>
                <input
                  type="text"
                  placeholder="Land"
                  name="country"
                  value={land}
                  onChange={(e) => setLand(e.target.value)}
                />
              </div>

              <div className="item">
                <span>bio:</span>
                <textarea
                  placeholder="about"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
