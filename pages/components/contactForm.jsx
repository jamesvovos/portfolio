import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const notify = () => toast.success("Message sent!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aujw0fb",
      "template_mr1y38m",
      form.current,
      "s6mcsCiLHfbNxnPNp"
    );
    e.currentTarget.reset();
    notify();
  };
  return (
    <section id="contact" className="contact section container mx-auto pt-20">
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
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                  <button className="formBtn" type="submit" name="submit">
                    <ToastContainer position="bottom-center" theme="dark" />
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
