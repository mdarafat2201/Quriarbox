import React from "react";
import Button from "../CommonComponent/Button";
import { IoBagHandleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <>
      <div className="mt-10">
        <div className="w-[40%] bg-white p-10">
          <div className="text-center">
            <span>
              <IoBagHandleOutline className="inline-block text-5xl text-orangecolor" />
            </span>
            <h1>Business Services</h1>
          </div>

          <p>
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
