import React from "react";

import { Oregano } from "next/font/google";

const oregano = Oregano({
  weight: ["400"],
  subsets: ["latin"],
});

const Heading = () => {
  return (
    <div className="w-[60%] gap-2 font-semibold  flex items-center justify-center flex-col text-[#161616] text-center">
      <p className={`text-6xl ${oregano.className}`}>
        High-Impact Landing Pages That Drive Results.
      </p>
      <p className="text-lg font-normal">
        Streamlined Templates and Components to Boost Your Success.
      </p>
    </div>
  );
};

export default Heading;
