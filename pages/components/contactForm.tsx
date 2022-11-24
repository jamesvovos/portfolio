import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="contact section container mx-auto">
      <div className="sectionTitle font-sourcecode">
        <span className="titleSymbol">.</span>
        <h5 className="titleText">contactJames</h5>
        <span className="titleSymbol">()</span>
      </div>

      <div className="contact Container grid">
        <div className="socialContacts grid">
          <div className="cards grid">
            <div className="contactCard">
              <div className="form grid ">
                <h3 className="pd-1 text-3xl font-sourcecode text-white">
                  Get in touch with me
                </h3>
                <form action="">
                  <input type="text" placeholder="Enter your name" />
                  <input type="email" placeholder="Enter your email" />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                  ></textarea>
                  <button className="formBtn" type="submit" name="submit">
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
