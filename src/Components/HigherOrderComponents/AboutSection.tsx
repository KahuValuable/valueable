import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-4 dark:invert"
    >
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <h2 className="heading-text text-4xl mb-6">ABOUT</h2>
        <p className="body-text text-lg mb-8 text-center">
          Valueable was established in 2025 to help conservation-focused
          organisations show the worth of their work. We’re a small team of
          individuals passionate about the possibility of revolutionising how
          value is valued.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1 bg-blue-100 rounded-xl p-6 shadow">
            <h3 className="subheading-text text-2xl mb-2 text-blue-900">
              Our vision
            </h3>
            <p className="body-text text-base text-blue-900">
              A world where the value of every transaction is transparent
            </p>
          </div>
          <div className="flex-1 bg-orange-100 rounded-xl p-6 shadow">
            <h3 className="subheading-text text-2xl mb-2 text-orange-900">
              Our mission
            </h3>
            <p className="body-text text-base text-orange-900">
              To provide tools that help people and organisations understand how
              their decisions affect profit, people, and the planet
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p
            className="body-text text-lg text-center font-semibold"
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
