import React from "react";
import "./index.scss";
import Layout from "../../Layout";

export default function Contact() {
  return (
    <Layout>
      <form action="https://formspree.io/f/mrgjzjea"
           method="POST" 
           className="Contact">
         <div className="contact-component">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <label>Message</label>
            <textarea name="messge" required rows={10} />
            <div className="input-contact">
                <div className="input-group">
                  <div className="label">Email Adress</div>
                  <input
                    name="email"
                    type="text"
                    required
                  />
                </div>

                <div className="input-group">
                  <div className="label">Fullname</div>
                  <input
                    name="fullname"
                    type="text"
                    required
                  />
                </div>
              </div>
              <button>Send</button>
         </div>
      </form>
    </Layout>
  );
}
