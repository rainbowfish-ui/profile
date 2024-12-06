import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { CiLink, CiLock } from "react-icons/ci";

const Card = () => {
  return (
    <div className="w-[30rem] h-80 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center border p-1">
      <div className="w-full h-8 flex items-center justify-between px-2 text-xs text-gray-700">
        <div className="size-full flex items-center gap-1">
          <div className="size-2 rounded-full bg-gray-300"></div>
          <div className="size-2 rounded-full bg-gray-300"></div>
          <div className="size-2 rounded-full bg-gray-300"></div>
        </div>
        <div className="size-full flex items-center justify-center gap-2 lowercase">
          <div className="px-2 py-0.5 flex gap-4 items-center bg-gray-100 rounded-md ">
            <CiLock size={15} />
            <p>Name.com</p>
            <CiLink size={15} />
          </div>
        </div>
        <div className="size-full flex items-center justify-end text-gray-500 gap-2">
          <BsArrowDownCircle />
          <CgMathPlus size={15} />
        </div>
      </div>
      <div className="size-full rounded-lg bg-gray-100"></div>
    </div>
  );
};

export default Card;
