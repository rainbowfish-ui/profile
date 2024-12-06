import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Buttons = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <button className="px-6 py-1.5 bg-[#161616] text-white rounded-lg">
        Login
      </button>
      <button className="p-1 pl-3 flex items-center group hover:gap-4 transition-all gap-0 hover:border-gray-600 border border-white rounded-full">
        Explore
        <span className="p-2 rounded-full group-hover:bg-gray-600 group-hover:text-white transition-all">
          <FaArrowRightLong />
        </span>
      </button>
    </div>
  );
};

export default Buttons;
