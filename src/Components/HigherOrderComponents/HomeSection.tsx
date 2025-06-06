import React, { useState, useEffect } from "react";
import Image from "next/image";
import WordScroll from "../BaseComponents/WordScroll";
import ImageMap from "../BaseComponents/ImageMap";

const HomeSection: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false); // Ensure it's client-side
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is in mobile view only on the client
  useEffect(() => {
    setIsHydrated(true); // Mark as hydrated
    const updateView = () => {
      setIsMobile(window.innerWidth < 1000); // Condition for mobile view
    };

    // Initial check and listener
    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView); // Cleanup
  }, []);

  if (!isHydrated) {
    // Avoid mismatch by rendering an empty placeholder before hydration
    return null;
  }

  return (
    <div className="relative">
      {/* Conditionally Render the Centered Logo */}
      {!isMobile && (
        <div className="absolute top-40 flex justify-center w-full">
          <Image
            src="/ValuableLogoBlue.png"
            height={400}
            width={400}
            alt="Valuable Logo"
            className="object-contain"
          />
        </div>
      )}

      {/* Main Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-start pt-[10vh] w-full max-w-7xl mx-auto items-center"
      >
        {/* WordScroll Section */}
        <div className="flex-1 flex flex-col items-center justify-start gap-6 px-4">
          <WordScroll />
        </div>

        {/* ImageMap Section */}
        <div className="flex-1 flex flex-col items-center justify-start gap-10 px-4 mt-6 md:mt-0">
          <ImageMap />
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
