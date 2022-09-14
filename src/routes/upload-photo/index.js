import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";

// images
import svg from "./images/uploadFile.png";

export default function Upload() {
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [photoFile, setPhotoFile] = React.useState("");

  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <LayoutLogout>
      <div className="Upload-Photo-Route">
        <div className="wrapper">
          <form className="upload-photo-form" onSubmit={submitHandler}>
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

              {/* <div>
                <input placeholder="Category" type="text" />
              </div> */}
              <div class="custom-select">
                <select>
                  <option value="0">Category:</option>
                  <option value="1">Nature</option>
                  <option value="2">Foods</option>
                  <option value="3">Cars</option>
                  <option value="4">Arts</option>
                  <option value="5">Fashion</option>
                  <option value="6">Other</option>
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
          </form>
          <div className="upload-btn">
            <button type="submit">Upload</button>
          </div>
          <div className="svg">
            <img src={svg} alt="" />
          </div>
        </div>
      </div>
    </LayoutLogout>
  );
}
