import React from "react";
import "./index.scss";
import LayoutLogout from "../../LayoutLogout";

// images
import uploadFile from "./images/uploadFile.png";
import avatar from "./images/avatar.webp";
export default function Upload() {
  return (
    <LayoutLogout>
      <div className="Upload-Photo-Route">
        <div className="wrapper">
          <form action="" className="upload-photo-form">
            <div className="photo">
              <img src={avatar} alt="" />
            </div>
            <div className="input-group">
              <div className="choose-btn">
                <button>choose file</button>
              </div>
              <div>
                <input placeholder="Category" type="text" />
              </div>
              <div>
                <input placeholder="title" type="text" />
              </div>
              <div>
                <input placeholder="location" type="text" />
              </div>
              <div>
                <textarea placeholder="description" type="text" />
              </div>
              <div className="upload-btn">
                <button type="submit">Upload</button>
              </div>
            </div>
          </form>

          <div className="svg">
            <img src={uploadFile} alt="" />
          </div>
        </div>
      </div>
    </LayoutLogout>
  );
}
