import React from "react";

const Hero = () => {
  return (
    <div className="size-full flex items-center justify-center pt-20 flex-col">
      <div className="flex items-center justify-center size-fit bg-[#161616] text-white py-1 px-4 text-xs rounded-full">
        Built with Next.js and Tailwind CSS
      </div>
      <div className="w-[60%] gap-2 font-semibold  flex items-center justify-center flex-col text-[#161616] text-center">
        <p className="text-6xl">
          High-Impact Landing Pages That Drive Results.
        </p>
        <p className="text-xl font-normal">
          Streamlined Templates and Components to Boost Your Success.
        </p>
      </div>
    </div>
  );
};

export default Hero;
