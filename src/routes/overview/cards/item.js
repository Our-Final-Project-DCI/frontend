import React, { Component } from "react";
import "./items.scss";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.item.img} alt="" />
        <h4>{this.props.item.username}</h4>
        <p>#{this.props.item.category}</p>

        <button className="like">
          <FaRegHeart />
        </button>

        <button className="download">
          <BiDownload />
        </button>
      </div>
    );
  }
}

export default Item;
