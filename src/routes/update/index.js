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
      <input type="text" placeholder="Fullname" name='name' />
      <input type="text" placeholder="username"  name='username'/>
      <input type="text" placeholder="city"  name='city'/>
      <input type="text" placeholder="Land" name='country'/>
      <textarea  placeholder="about" />
      <div>
      <a href="">Twiter</a>
      <a href="">Facebook</a>
      <a href="">Instagram</a>
      </div>

      <button type="submit" >Update</button>
    </form>
    </Layout>
  );
}