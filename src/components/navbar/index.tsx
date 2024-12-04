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
    <nav className="sticky py-2 w-[80%] h-fit rounded-lg backdrop-blur-sm flex items-center justify-between p-1 text-sm">
      <div className="flex items-center drop-shadow-lg">
        <div className="size-10 rounded-md flex items-center justify-center">
          <GiFishingNet size={18} />
        </div>
        <h1 className="text-lg font-semibold drop-shadow-2xl">Rainbowfish</h1>
      </div>
      <div className="flex gap-2 items-center justify-center font-semibold max-lg:hidden">
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
      <button className="bg-black rounded-lg text-white px-6 py-1 h-10 text-nowrap">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
