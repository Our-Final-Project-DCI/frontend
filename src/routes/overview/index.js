import React from "react";
import "./index.scss";
import Layout from "../../Layout";

export default function Overview() {
  return (
    <Layout>
      <div className="Main">
        <div className="text">
          <h1>
            <span className="span">Photo</span>gram
            <br />
            Online Gallery Photos
          </h1>

          <p>
            Nam libero tempore, cum soluta nobis est <br /> eligendi optio
            cumque nihil impedit quo <br /> minus id quod maximale placet facere
          </p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" className="input"></input>
        </div>
      </div>
    </Layout>
  );
}
