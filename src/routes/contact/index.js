import React from "react";
import "./index.scss";
import Layout from "../../Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="Contact">
         <div className="contact-component">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <label>Message</label>
            <textarea rows={10} />
            <div className="input-contact">
                <div className="input-group">
                  <div className="label">Email Adress</div>
                  <input
                    type="text"
                  />
                </div>

                <div className="input-group">
                  <div className="label">Fullname</div>
                  <input
                    type="text"
                  />
                </div>
              </div>
              <button>Send</button>
         </div>
      </div>
    </Layout>
  );
}
