import React from "react";

const flex = ({ className, children }) => {
  return (
    <div className={`flex ${className}`}>
      {children ? children : "kico nai"}
    </div>
  );
};

export default flex;
