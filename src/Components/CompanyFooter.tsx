import React from "react";

const CompanyFooter = () => {
  return (
    <div className="footer-color w-full dark:invert">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="heading-text">Company Name</h1>
        <p className="body-text">© 2023 Company Name. All rights reserved.</p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyFooter;
