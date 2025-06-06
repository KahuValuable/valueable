import React from "react";

const BoxContainer: React.FC<{
  children: React.ReactNode;
  className?: string; // Optional for other utility classes
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg rounded-lg p-8 md:p-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default BoxContainer;
