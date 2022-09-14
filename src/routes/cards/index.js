import React from "react";
import "./index.scss";

export default function Card() {
  return (
    <div className="Card">
      <div className="Card__header">
        <div className="Card__userlogo"></div>
        <div>
          <div className="Card__userName">Alexander Li</div>
          <div className="Card__userPosition">Germany</div>
        </div>
      </div>
    </div>
  );
}
