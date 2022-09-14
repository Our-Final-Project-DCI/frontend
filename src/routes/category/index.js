import React from "react";
import "./index.scss";
import Layout from "../../Layout";

export default function Category() {
  return (
    <Layout>
      <div className="Categorie">
        <div className="categorie-content-left">
          <div className="description"><p>Photogramm <br/> Online Gallery <br/> Photos</p></div>
          <div className="img-content"><img src='/img/login.svg' alt="categorie"/></div>
        </div>
        <div className="categorie-content-right">
          <div className="item item-natur"><p>natur</p></div>
          <div className="item item-foods"><p>foods</p></div>
          <div className="item item-cars"><p>cars</p></div>
          <div className="item item-fashions"><p>fashions</p></div>
          <div className="item item-animals"><p>animals</p></div>
          <div className="item item-arts"><p>arts</p></div>
          <div className="item item-others"><p>others...</p></div>
        </div>
      </div>
    </Layout>
  );
}
