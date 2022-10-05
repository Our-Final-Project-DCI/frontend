import React from "react";
import "./index.scss";
import Layout from "../../Layout";

export default function About() {
  return (
    <Layout>
      <div className="About">
        <div className="about-left">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <button>Read More</button>
        </div>
        <div className="about-right">
           <div className="image-component">
             <img src="/img/lens2.gif" alt="lens" />
           </div>
        </div>
      </div>
    </Layout>
  );
}
