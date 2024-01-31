import React from "react";
import Flex from "../CommonComponent/flex";
import Button from "../CommonComponent/Button";
import { FaArrowRight } from "react-icons/fa6";
import BannerRightImg from "../../assets/bannerImgs.png";
const Banner = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC] py-28">
        <div className="container">
          <Flex className="items-center justify-between">
            <div className="w-[35%]">
              <div>
                <h1 className="text-[#261134] text-[45px] font-Raleway font-normal ">
                  A trusted provider of <br />
                  <span className="font-extrabold">courier services.</span>
                </h1>
                <p className="text-[#4D4D4D] font-Raleway font-normal leading-6 text-2xl pr-6 mt-4 mb-14">
                  We deliver your products safely to your home in a reasonable
                  time.
                </p>
                <Button className="py-3 px-5 bg-orangecolor rounded-md text-xl text-white font-bold font-Oxanium">
                  <p className="flex items-center gap-x-2">
                    Get started <FaArrowRight />
                  </p>
                </Button>
              </div>
            </div>
            <div className="w-[65%]">
              <picture>
                <img src={BannerRightImg} alt={BannerRightImg} />
              </picture>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Banner;
