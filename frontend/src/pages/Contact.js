import React from "react";
import Layout from "./../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us | eStore"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/pages/contactUs.jpg"
            alt="contactUs"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-5">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-1">
            Got any query? Or maybe have any information about any product? Feel
            free to call anytime ) we are 24X7 available! :D
          </p>
          <p className="mt-3">
            <BiMailSend /> Drop us a mail on: contactService@estore.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> Call us at: 312-875-6789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-333-333 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
