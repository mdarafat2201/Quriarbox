import React from "react";
import Logo from "../../assets/Logo.png";
import Button from "../CommonComponent/Button";
import { IoSearchOutline } from "react-icons/io5";
import Flex from "../CommonComponent/flex";
const Header = () => {
  return (
    <nav className=" opacity-70 bg-gradient-to-r from-navbarbgfrom via-navbarbgvia to-navbarbgto pt-6 pb-7">
      <div className="container">
        <Flex className="items-center">
          <div className="pr-[520px]">
            <picture>
              <img src={Logo} alt={Logo} />
            </picture>
          </div>
          <div className="pr-14">
            <Flex className="gap-x-7">
              <li>
                <a
                  href="#"
                  className="font-Raleway text-[16px] font-bold hover:text-orangecolor"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-Raleway text-[16px] font-bold hover:text-orangecolor"
                >
                  Our services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-Raleway text-[16px] font-bold hover:text-orangecolor"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-Raleway text-[16px] font-bold hover:text-orangecolor"
                >
                  What’s new?
                </a>
              </li>
            </Flex>
          </div>
          <div className="pr-5">
            <Button className="py-3 px-3 rounded-lg bg-red-200">
              <IoSearchOutline className="text-2xl" />
            </Button>
          </div>
          <div>
            <Button className="py-3 rounded-lg px-3 bg-red-200">
              <p>contact us</p>
            </Button>
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default Header;
