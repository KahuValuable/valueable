import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const Navbar = () => {
  return (
    <div className="dark:invert">
      <ButtonGroup>
        <Button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          about
        </Button>
        <Button
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          products
        </Button>
        <Button
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
  );
};

export default Navbar;
