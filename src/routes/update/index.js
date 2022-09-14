import React from "react";
import "./index.scss";
import Layout from "../../Layout";


export default function Update() {
 
  const submitHander = (e) => {e.preventDefault(); console.log("submit")};
  return (
    <Layout> 
    <form  className="updateform" onSubmit={submitHander}>
      <select>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="text" placeholder="Fullname"  />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="city" />
      <input type="text" placeholder="Land" />
      <textarea  placeholder="about" />
      <div>
      <a>Twiter</a>
      <a>Facebook</a>
      <a>Instagram</a>
      </div>

      <button type="submit" >Update</button>
    </form>
    </Layout>
  );
}