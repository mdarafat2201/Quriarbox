import React from "react";
import Button from "../CommonComponent/Button";
import { GrDocumentMissing } from "react-icons/gr";

const Card = ({ CardClassName, titel, className, icon }) => {
  return (
    <>
      <div className="mt-10">
        <div className={CardClassName}>
          <div className="text-center">
            <div className={className}>
              {icon ? (
                icon
              ) : (
                <GrDocumentMissing className="inline-block text-4xl" />
              )}
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
