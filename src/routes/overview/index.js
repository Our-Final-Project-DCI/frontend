import React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import Card from "../cards/index.js";

export default function Overview() {
  return (
    <Layout>
      <div className="Main">
        <div className="bg_img">
          <div className="text">
            <h1>
              <span className="span">Photo</span>gram
              <br />
              Online Gallery Photos
            </h1>

            <p>
              Nam libero tempore, cum soluta nobis est <br /> eligendi optio
              cumque nihil impedit quo <br /> minus id quod maximale placet
              facere
            </p>
          </div>

          <div className="search">
            <div className="border">
              <FaSearch />
              <input type="text" placeholder="Search" className="input"></input>
            </div>
          </div>
        </div>
        <div className="img-cards">
          <Card />
        </div>
      </div>
    </Layout>
  );
}
