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
              {/* <div>
                <input placeholder="Category" type="text" />
              </div> */}
              <div class="custom-select">
                <select>
                  <option value="0">Category:</option>
                  <option value="1">Natur</option>
                  <option value="2">Foods</option>
                  <option value="3">Cars</option>
                  <option value="4">Arts</option>
                  <option value="5">Fashion</option>
                  <option value="6">Other</option>
                </select>
              </div>

              <div>
                <input placeholder="title" type="text" />
              </div>
              <div>
                <input placeholder="location" type="text" />
              </div>
              <div>
                <textarea
                  placeholder="description"
                  name="textarea"
                  rows="8"
                  cols="22"
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
            <img src={uploadFile} alt="" />
          </div>
        </div>
      </div>
    </LayoutLogout>
  );
}
