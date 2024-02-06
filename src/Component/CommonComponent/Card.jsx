import React from "react";
import Button from "../CommonComponent/Button";
import { IoBagHandleOutline } from "react-icons/io5";

const Card = ({ titel }) => {
  return (
    <>
      <div className="mt-10">
        <div className="max-w-[390px] bg-white p-10 rounded-2xl">
          <div className="text-center">
            <div>
              <span className="icon_part inline-block text-3xl relative text-orangecolor after:absolute after:content-[''] after:w-10 after:h-10 after:bg-[#FFAF0F] after:top-[-17px] after:left-1/2 after:rounded-full after:-translate-x-1/2">
                <IoBagHandleOutline className="iconStroke" />
              </span>
            </div>
            <h2 className="mt-7 font-extrabold text-2xl font-Raleway text-[#464558]">
              {titel ? titel : "Business Services"}
            </h2>
          </div>

          <p className="text-4 font-Raleway font-normal text-[#7B7A8B] mt-8 mb-10">
            We give you complete reliable delivery for your company. We will
            take full responsibility of the deliveries.
          </p>
          <ul className="px-4">
            <li className="list__item font-normal text-4 font-Raleway list-disc text-[#7b7a8b]">
              Corporate goods
            </li>
            <li className="list__item font-normal text-4 font-Raleway list-disc text-[#7b7a8b]">
              Shipment
            </li>
            <li className="list__item font-normal text-4 font-Raleway list-disc text-[#7b7a8b]">
              Accesories
            </li>
          </ul>
          <Button className="border-2 px-5 py-2 w-full mt-10 border-orangecolor rounded-md text-orangecolor hover:bg-orangecolor hover:text-[#fff] transition-all">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
