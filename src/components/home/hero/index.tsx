import React from "react";
import Heading from "./heading";
import Announcement from "./announcement";
import Buttons from "./buttons";

const Hero = () => {
  return (
    <div className="size-full flex items-center justify-center pt-10 flex-col gap-6">
      <Announcement />
      <Heading />
      <Buttons />
    </div>
  );
};

export default Hero;
