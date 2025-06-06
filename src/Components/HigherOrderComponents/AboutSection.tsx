import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6">
        <h2 className="heading-text text-4xl mb-6">ABOUT</h2>
        <p className="body-text text-lg mb-8 text-center">
          Valueable was established in 2025 to help conservation-focused
          organisations show the worth of their work. We&#39;re a small team of
          individuals passionate about revolutionising how value is valued.
        </p>
        <div className="rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow bg-gray-100">
          <h2 className="subheading-text text-2xl md:text-3xl font-bold mb-4">
            Ready to show the worth of your work?
          </h2>
          <p className="body-text text-lg md:text-xl font-medium text-gray-800">
            Communicating your organisation&#39;s impact can feel complex—or
            even impossible. <strong>Valueable</strong> makes it simple. Our
            suite of Cost-Impact Analysis tools helps you understand, measure,
            and demonstrate the real-world value your work creates.
          </p>
          <p className="body-text text-lg md:text-xl font-medium text-gray-800">
            It&#39;s time to tell your story with clarity and confidence.
          </p>
        </div>

        {/* Contact Prompt */}
        <div className="mt-4">
          <p
            className="body-text text-lg text-center font-semibold cursor-pointer text-blue-600 hover:underline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact us today to discuss how we can help you understand your
            impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
