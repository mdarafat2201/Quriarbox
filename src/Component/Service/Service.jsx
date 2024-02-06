import React from "react";
import AllTitle from "../CommonComponent/AllTitle";
import Card from "../CommonComponent/Card";
import Flex from "../CommonComponent/flex";

const Service = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC] py-28">
      <div className="container">
        <AllTitle heading="SERVICES" subtitle="Our services for you" />
        <Flex className="justify-between">
          <Card titel="Business Services" />
          <Card />
          <Card />
        </Flex>
      </div>
    </section>
  );
};

export default Service;
