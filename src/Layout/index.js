import React from "react";
import Navigation from "./navigation";
import Mobile from "./mobilenavigation";
import "./index.scss";

export default function Header(props) {
  return (
    <div className="Layout">
      <Navigation />
      <Mobile />
      {props.children}
    </div>
  );
}
