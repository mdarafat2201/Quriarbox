import React from "react";
import Logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <nav className=" opacity-70 bg-gradient-to-r from-navbarbgfrom via-navbarbgvia to-navbarbgto">
      <div className="container">
        <div>
          <picture>
            <img src={Logo} alt={Logo} />
          </picture>
        </div>
      </div>
    </nav>
  );
};

export default Header;
