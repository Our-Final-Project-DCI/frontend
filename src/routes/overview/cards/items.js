import React, { Component } from "react";
import "./items.scss";
import { Item } from "./item";

export class Items extends Component {
  render() {
    return (
      <main className="Main">
        {this.props.items.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </main>
    );
  }
}

export default Items;
