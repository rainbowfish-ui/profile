import Link from "next/link";
import React from "react";
import { GiFishingNet } from "react-icons/gi";

const navItems = [
  {
    name: "Templates",
    route: "/templates",
  },
  {
    name: "Components",
    route: "/components",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-4 w-[50%] h-fit rounded-lg backdrop-blur-lg border flex items-center justify-between p-1 text-sm">
      <div className="flex gap-2 items-center">
        <div className="size-10 bg-black rounded-md text-white flex items-center justify-center">
          <GiFishingNet size={28} />
        </div>
        <h1 className="text-xl font-semibold drop-shadow-lg">RFish</h1>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {navItems.map(({ name, route }) => {
          return (
            <Link
              href={route}
              key={name}
              className="hover:bg-gray-200 p-2 rounded-md transition-colors"
            >
              {name}
            </Link>
          );
        })}
      </div>
      <button className="bg-black rounded-lg text-white px-4 py-2 h-10">
        Have an Idea?
      </button>
    </nav>
  );
};

export default Navbar;
