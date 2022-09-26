import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";
import { useNavigate } from "react-router-dom";

// images
import svg from "./images/uploadFile.png";

export default function Upload() {
  const options = [
    { value: "", text: "--Choose a Category--" },
    { value: "Nature", text: "Nature" },
    { value: "Foods", text: "Foods" },
    { value: "Cars", text: "Cars" },
    { value: "Arts", text: "Arts" },
    { value: "Fashion", text: "Fashion" },
    { value: "Animals", text: "Animals" },
    { value: "Others", text: "Others" },
  ];

  const [photoFile, setPhotoFile] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(
    options[0].value
  );
  const [title, setTitle] = React.useState("");
  //const [category, setCategory] = React.useState("");

  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  const uploadPhotoHandler = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    const formData = new FormData();
    formData.append("file", photoFile);
    formData.append("category", selectedCategory);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);

    const res = await fetch("http://localhost:3007/photos/upload-photo", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const result = await res.json();
    setIsFetching(false);

    if (res.status === 200) {
      // weiterleiten
      navigate("/photos/" + result._id);
    } else if (result.errors) {
      // validation error
      setError(result.errors[0].msg);
    } else if (result.error) {
      // server error
      setError(result.error);
    }
  };

  return (
    <LayoutLogout>
      <div className="Upload-Photo-Route">
        <div className="wrapper">
          <form className="upload-photo-form" onSubmit={uploadPhotoHandler}>
            <div className="photo">
              <img src={photoFile} alt="" />
            </div>
            <div className="input-group">
              <div className="choose-btn">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoFile(e.target.files[0])}
                />
              </div>

              <div class="custom-select">
                <select value={selectedCategory} onChange={handleChange}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  placeholder="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  placeholder="description"
                  name="textarea"
                  rows="8"
                  cols="22"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* <div className="upload-btn">
                <button type="submit">Upload</button>
              </div> */}
            </div>
            <button type="submit" className="upload-btn">
              Upload
            </button>
          </form>

          <div className="svg">
            <img src={svg} alt="" />
          </div>
        </div>
      </div>
    </LayoutLogout>
  );
}
