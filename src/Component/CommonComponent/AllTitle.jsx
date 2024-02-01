import React from "react";
import Flex from "./flex";

const AllTitle = ({ heading, subtitle }) => {
  return (
    <Flex className="justify-center flex-col items-center">
      <h1 className="text-4xl text-orangecolor font-Oxanium font-bold">
        {heading ? heading : "SERVICES"}
      </h1>
      <h3 className="text-3xl font-bold font-Raleway">
        {subtitle ? subtitle : "Our services for you"}
      </h3>
    </Flex>
  );
};

export default AllTitle;
