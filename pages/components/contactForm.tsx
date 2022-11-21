import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="contact section container mx-auto">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contact Container grid">
        <div className="socialContacts grid">
          <div className="cards grid">
            <div className="contactCard">
              <div className="form grid ">
                <h3 className="pd-1 text-3xl">Get in touch with me</h3>
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
