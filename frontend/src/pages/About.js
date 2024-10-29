import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us | eStore"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/pages/aboutUs.jpg"
            alt="An E-Commerce platform where you can find anything you want!"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Welcome to our e-commerce platform, where shopping meets
            convenience! We aim to provide a seamless and enjoyable online
            shopping experience with a wide range of products tailored to your
            needs. From effortless browsing to secure payments and timely
            delivery, we ensure every step of your journey is smooth and
            hassle-free. Our commitment to quality and customer satisfaction
            drives us to curate the best products at competitive prices. Whether
            you're looking for everyday essentials or exclusive finds, we've got
            you covered. Thank you for choosing us - your satisfaction is our
            priority! Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
