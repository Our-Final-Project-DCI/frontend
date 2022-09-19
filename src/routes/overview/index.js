import React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import Items from "./cards/items";
import dbanks from "./cards/imgs/clay-banks-d5RzNq3_qmE-unsplash.jpg";
import dbankss from "./cards/imgs/colton-jones-xM6ml5rt-Gk-unsplash.jpg";
import dbanksss from "./cards/imgs/isuru-ranasinha-U6WFEIk_D_k-unsplash.jpg";
import dbankssss from "./cards/imgs/mael-balland-lmFTZmx0_lE-unsplash.jpg";
import dbanksssss from "./cards/imgs/masahiro-miyagi-WpIt10mMKXc-unsplash.jpg";
import dbankssssss from "./cards/imgs/pavel-anoshin-s-JnHbb5wNQ-unsplash.jpg";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "",
          username: "User Test",
          category: "nature",
          img: dbanks,
        },
        {
          id: 2,
          title: "",
          username: "User Test1",
          category: "nature",
          img: dbankss,
        },
        {
          id: 3,
          title: "",
          username: "User Test2",
          category: "nature",
          img: dbanksss,
        },
        {
          id: 4,
          title: "",
          username: "User Test3",
          category: "nature",
          img: dbankssss,
        },
        {
          id: 5,
          title: "",
          username: "User Test4",
          category: "city",
          img: dbanksssss,
        },
        {
          id: 6,
          title: "",
          username: "User Test4",
          category: "city",
          img: dbankssssss,
        },
      ],
    };
  }
  render() {
    return (
      <Layout>
        <div className="Overview">
          <div className="Overview__bgimg">
            <div className="Overview__text">
              <h1 className="Overview__h1">
                <span className="Overview__span">Photo</span>gram
                <br />
                Online Gallery Photos
              </h1>

              <p className="Overview__p">
                Nam libero tempore, cum soluta nobis est <br /> eligendi optio
                cumque nihil impedit quo <br /> minus id quod maximale placet
                facere
              </p>
            </div>

            <div className="Overview__search">
              <div className="Overview__border">
                <button className="Overview__button">
                  <FaSearch />
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="Overview__input"
                ></input>
              </div>
            </div>
          </div>
          <Items items={this.state.items} />
        </div>
      </Layout>
    );
  }
}

export default Overview;
