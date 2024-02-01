import React from "react";
import Button from "../CommonComponent/Button";

const Card = () => {
  return (
    <>
      <div className="w-1/3 bg-white p-10">
        <h1>Business Services</h1>
        <p>
          We give you complete reliable delivery for your company. We will take
          full responsibility of the deliveries.
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
    </>
  );
};

export default Card;
