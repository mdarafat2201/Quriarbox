import React from "react";
import Button from "../CommonComponent/Button";
import { IoBagHandleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <>
      <div className="mt-10">
        <div className="w-[40%] bg-white p-10">
          <div className="text-center">
            <div>
              <span className="icon_part inline-block text-3xl relative text-orangecolor after:absolute after:content-[''] after:w-10 after:h-10 after:bg-[#FFAF0F] after:top-[-17px] after:left-1/2 after:rounded-full after:-translate-x-1/2">
                <IoBagHandleOutline className="iconStroke" />
              </span>
            </div>
            <h2 className="mt-7 font-extrabold text-2xl font-Raleway text-[#464558]">
              Business Services
            </h2>
          </div>

          <p className="text-2 font-Raleway font-normal">
            We give you complete reliable delivery for your company. We will
            take full responsibility of the deliveries.
          </p>
          <ul>
            <li>Corporate goods</li>
            <li>Shipment</li>
            <li>Accesories</li>
          </ul>
          <Button className="border-2 p-5 border-orangecolor rounded-md text-orangecolor">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
