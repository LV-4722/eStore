import React from "react";
import Layout from "./../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy | eStore"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/privacyPolicy.jpg"
            alt="privcy policy"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>
            {
              "We value your privacy and are committed to protecting your personal information. Any data you share with us, including your name, contact details, and payment information, is collected to enhance your shopping experience and processed securely. We use this information to fulfill orders, provide customer support, improve our services, and send relevant updates. Your data will never be sold or shared with third parties, except as required for order processing or legal compliance.By using our website, you agree to our privacy practices. If you have any questions or concerns, feel free to contact us. Your trust matters to us!"
            }
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
