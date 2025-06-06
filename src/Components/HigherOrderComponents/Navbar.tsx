import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic for showing/hiding the navbar
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 backdrop-blur-lg" : "opacity-0"
      }`}
      style={{
        backgroundColor: "rgba(0, 62, 93, 0.8)", // A lovely semi-transparent navy
        height: "70px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/WhiteLogo.png"
            alt="Valuable Logo"
            width={140}
            height={56}
            className="object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <button
            className="text-white text-sm uppercase font-medium tracking-wider hover:text-blue-300 transition duration-300"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className="text-white text-sm uppercase font-medium tracking-wider hover:text-blue-300 transition duration-300"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Products
          </button>
          <button
            className="text-white text-sm uppercase font-medium tracking-wider hover:text-blue-300 transition duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </button>
        </div>

        {/* CTA Button (for smaller screens optionally) */}
        <div className="hidden md:flex">
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#006494",
              color: "white",
              fontWeight: "bold",
              borderRadius: "999px",
              padding: "8px 24px",
            }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Log in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
