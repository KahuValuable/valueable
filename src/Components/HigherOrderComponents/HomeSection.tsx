import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center dark:invert"
      >
        <Image
          src="/ValuableLogoBlue.png"
          alt="Logo"
          width={400}
          height={75}
          priority
        />
      </section>
    </div>
  );
};

export default HomeSection;
