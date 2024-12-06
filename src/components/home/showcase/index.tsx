import React from "react";
import Card from "./card";

const Showcase = () => {
  return (
    <div className="flex size-full items-center justify-center flex-wrap min-h-96 gap-10 py-10">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Showcase;
