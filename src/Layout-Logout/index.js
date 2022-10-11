import React from "react";
import "./index.scss";
import Navigation2 from "./navigation";
import Mobile2 from "./mobilenavigation";

export default function Logout(props) {
  return (
    <div className="Layout-Logout">
      <Navigation2 />
      <Mobile2 />
      {props.children}
    </div>
  );
}
