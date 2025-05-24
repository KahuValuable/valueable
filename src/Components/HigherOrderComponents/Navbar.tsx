import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="hidden sm:block fixed top-8 left-8 z-50">
        <Image
          src="/Orbs.png"
          alt="Orbs"
          width={48}
          height={48}
          className="object-cover dark:invert cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
      <nav
        className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 
        transition-all duration-300 w-[90%] sm:w-auto
        ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        bg-white/80 dark:bg-black/70 backdrop-blur-lg shadow-lg rounded-full 
        px-3 sm:px-6 py-1 sm:py-2`}
        style={{ maxWidth: "600px" }}
      >
        <div className="flex items-center justify-between sm:justify-start sm:gap-6">
          <Image
            src="/Orbs.png"
            alt="Orbs"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover dark:invert cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
          <ButtonGroup
            variant="text"
            color="primary"
            className="scale-75 sm:scale-100"
          >
            <Button
              className="heading-text text-xs sm:text-sm"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              about
            </Button>
            <Button
              className="heading-text text-xs sm:text-sm"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              products
            </Button>
            <Button
              className="heading-text text-xs sm:text-sm"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              contact
            </Button>
          </ButtonGroup>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
