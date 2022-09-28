import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";
import useUser from "../../hooks/useUser";

// Icons
import { BiPencil } from "react-icons/bi";

export default function Update() {
  const options = [
    { value: "", text: "--Choose a Gender--" },
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  const user = useUser();
  console.log(user);
  const [selectedGender, setSelectedGender] = React.useState(options[0].value);
  const [fullname, setFullname] = React.useState(user.data.fullname || "");
  const [city, setCity] = React.useState(user.data.city || "");
  const [land, setLand] = React.useState(user.data.land || "");
  const [description, setDescription] = React.useState(
    user.data.description || ""
  );
  const [avatar, setAvatar] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedGender(event.target.value);
  };

  const updateSubmitHander = async (e) => {
    e.preventDefault();
    const status = await user.update({
      gender: selectedGender,
      fullname: fullname,
      avatar: avatar,
      city: city,
      land: land,
      description: description,
    });
    if (status === 200) {
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }
  };

  return (
    <LayoutLogout>
      <div className="Update-User-Profile">
        <div className="user">
          <div className="avatar">
            <img src={user.data.avatar} alt="" className="hover_opacity" />
          </div>
          <h3>{user.data.username}</h3>
        </div>
        <div className="wrapper">
          <form className="updateform" onSubmit={updateSubmitHander}>
            <div className="input-group">
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  placeholder="profile imae"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </div>
              <div className="item">
                <select value={selectedGender} onChange={handleChange}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
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
            {user.error && <div className="error">{user.error}</div>}
            {showSuccess && (
              <div className="success">Update war erfolgreich</div>
            )}
          </form>
        </div>
      </div>
    </LayoutLogout>
  );
}
