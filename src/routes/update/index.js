import React from "react";
import "./index.scss";
import Layout from "../../Layout";


import avatar from "./images/avatar.webp";

export default function Update() {
  const [update, setUpdate] = React.useState([]);
  return (
    <Layout>
      <div className="User-Update-Route">
        <div className="wrapper">
          <div className="Profile">
            <div className="avatar-box">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <a href="/account">Back</a>
            </div>
            <div className="input-info">
              <form>
                <label>
                  Gender:
                  <input type="text" name="Gender" />
                </label>
                <label>
                  Fullname:
                  <input type="text" name="Fullname" />
                </label>
                <label>
                  Username:
                  <input type="text" name="Username" />
                </label>
                <label>
                  City:
                  <input type="text" name="City" />
                </label>
                <label>
                  Land:
                  <input type="text" name="Land" />
                </label>
                <label>
                  Bio:
                  <input type="text" name="Bio" />
                </label>

                
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}