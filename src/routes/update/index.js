import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";
import useUser from "../../hooks/useUser";

export default function Update() {
  const options = [
    { value: "", text: "--Choose a Gender--" },
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  // console.log(user);
  const user = useUser();
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
        <div className="wrapper">
          <div className="user">
            <div className="avatar">
              <img src={user.data.avatar} alt="" className="hover_opacity" />
            </div>
            <h3>{user.data.username}</h3>
          </div>

          <form className="update-form" onSubmit={updateSubmitHander}>
            <div className="input-group">
              <div className="item ">
                <label>Profile Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  placeholder="profile imae"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </div>
              <div className="item">
                <label>Gender:</label>

                <select value={selectedGender} onChange={handleChange}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="item">
                <label>Full name:</label>
                <input
                  type="text"
                  placeholder="Fullname"
                  name="name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="item">
                <label>City:</label>
                <input
                  type="text"
                  placeholder="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="item">
                <label>Land:</label>
                <input
                  type="text"
                  placeholder="Land"
                  name="country"
                  value={land}
                  onChange={(e) => setLand(e.target.value)}
                />
              </div>

              <div className="item">
                <label>Bio:</label>
                <textarea
                  placeholder="about"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                />
              </div>
            </div>
            <button className="update-btn" type="submit">
              Update
            </button>
            {user.error && <div className="error">{user.error}</div>}
            {showSuccess && (
              <div className="success">Done , update was success ...</div>
            )}
          </form>
        </div>
      </div>
    </LayoutLogout>
  );
}
