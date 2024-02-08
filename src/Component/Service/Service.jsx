import React from "react";
import AllTitle from "../CommonComponent/AllTitle";
import Card from "../CommonComponent/Card";
import Flex from "../CommonComponent/flex";
import { IoBagHandleOutline } from "react-icons/io5";
import { TfiHome } from "react-icons/tfi";
import { SlBag } from "react-icons/sl";
const Service = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC] py-28">
      <div className="container">
        <AllTitle heading="SERVICES" subtitle="Our services for you" />
        <Flex className="justify-between">
          <Card
            CardClassName="max-w-[390px] bg-white p-10 rounded-2xl"
            titel="Business Services"
            className="icon_part inline-block text-3xl relative text-orangecolor after:absolute after:content-[''] after:w-10 after:h-10 after:bg-[#FFAF0F] after:top-[-17px] after:left-1/2 after:rounded-full after:-translate-x-1/2"
            icon={<IoBagHandleOutline className="iconStroke" />}
          />
          <Card
            CardClassName="max-w-[390px] bg-white p-10 rounded-2xl"
            titel="Business Services"
            className="icon_part inline-block text-3xl relative text-orangecolor after:absolute after:content-[''] after:w-10 after:h-10 after:bg-[#FFAF0F] after:top-[-17px] after:left-1/2 after:rounded-full after:-translate-x-1/2"
            icon={<TfiHome className="iconStroke1" />}
          />
          <Card
            CardClassName="max-w-[390px] bg-white p-10 rounded-2xl"
            titel="Business Services"
            className="icon_part inline-block text-3xl relative text-orangecolor after:absolute after:content-[''] after:w-10 after:h-10 after:bg-[#FFAF0F] after:top-[-17px] after:left-1/2 after:rounded-full after:-translate-x-1/2"
            icon={<SlBag className="iconStroke" />}
          />
        </Flex>
      </div>
    </section>
  );
};

export default Service;
