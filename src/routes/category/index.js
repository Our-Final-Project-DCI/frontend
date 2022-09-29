import React from "react";
import "./index.scss";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";


export default function Category() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="Categorie">
        <div className="categorie-content-left">
          <div className="description"><p>Photogramm <br/> Online Gallery <br/> Photos</p></div>
          <div className="img-content"><img src='/img/login.svg' alt="categorie"/></div>
        </div>
        <div className="categorie-content-right">
          <div className="item item-natur" onClick={() => navigate("/category/Nature")}><p>nature</p></div>
          <div className="item item-foods" onClick={() => navigate("/category/Foods")}><p>foods</p></div>
          <div className="item item-cars" onClick={() => navigate("/category/Cars")}><p>cars</p></div>
          <div className="item item-fashions" onClick={() => navigate("/category/Fashions")}><p>fashions</p></div>
          <div className="item item-animals" onClick={() => navigate("/category/Animals")}><p>animals</p></div>
          <div className="item item-arts" onClick={() => navigate("/category/Arts")}><p>arts</p></div>
          <div className="item item-others" onClick={() => navigate("/category/Others")}><p>others...</p></div>
        </div>
      </div>
    </Layout>
  );
}
