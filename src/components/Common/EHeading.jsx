import React from "react";

const EHeading = ({text,children, color}) => {
  return (
    <div>
      <h1 class="bg-clip-text text-transparent bg-gradient-to-t from-black via-secondary  to-primary text-2xl md:text-5xl font-black text-center my-5">
        {children}
      </h1>
    </div>
  );
};

export default EHeading;
