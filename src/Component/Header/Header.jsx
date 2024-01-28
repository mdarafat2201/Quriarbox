import React from "react";
import Logo from "../../assets/Logo.png";
import Button from "../CommonComponent/Button";
import { IoSearchOutline } from "react-icons/io5";
import Flex from "../CommonComponent/flex";
const Header = () => {
  return (
    <nav className=" opacity-70 bg-gradient-to-r from-navbarbgfrom via-navbarbgvia to-navbarbgto pt-7 pb-9">
      <div className="container">
        <Flex className="justify-around">
          <div>
            <picture>
              <img src={Logo} alt={Logo} />
            </picture>
          </div>
          <div>
            <Flex className="gap-x-7">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">What’s new?</a>
              </li>
            </Flex>
          </div>
          <div>
            <Button className="p-5 bg-red-200">
              <IoSearchOutline />
            </Button>
          </div>
          <div>
            <Button className="p-5 bg-red-200">contact us</Button>
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default Header;
