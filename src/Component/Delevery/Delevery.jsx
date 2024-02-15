import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const Delevery = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <div className="bg-Deleveryigm bg-cover bg-no-repeat bg-center h-[500px] rounded-xl relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#0a090d4d] rounded-xl">
              <div className="flex justify-center items-center flex-col text-white h-full">
                <FaPlayCircle className="text-orangecolor text-5xl" />
                <h3 className=" text-3xl text-orangecolor font-Oxanium">
                  FASTERY DELIVERY
                </h3>
                <p className="max-w-[600px] text-center font-normal font-Raleway text-[25px]">
                  You can get your valuable item in the fastest period of time
                  with safety. Because your enrgency is our first priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delevery;
