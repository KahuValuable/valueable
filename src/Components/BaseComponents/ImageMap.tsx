import React from "react";
import Image from "next/image";

const ImageMap = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full max-w-3xl mx-auto mb-2 px-4">
        <div className="flex flex-row gap-2">
          <Image
            src="/Combo Chart.png"
            alt="combo chart icon"
            width={80}
            height={80}
            className="object-cover  "
          />
          <Image
            src="/scales.png"
            alt="scales icon"
            width={80}
            height={80}
            className="object-cover  "
          />
        </div>

        <div
          className="flex-grow border-t-4 mx-4"
          style={{ borderColor: "#003E5D" }}
        ></div>
        <div className="flex flex-row gap-2">
          <Image
            src="/Storytelling.png"
            alt="storytelling icon"
            width={80}
            height={80}
            className="object-cover  "
          />
        </div>
      </div>
      <h2 className="heading-text text-center">
        Let your data tell your
        <span className="oheading-text"> whole story</span>
      </h2>
    </>
  );
};

export default ImageMap;
