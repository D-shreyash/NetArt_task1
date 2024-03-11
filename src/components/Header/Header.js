import "./Header.css";
import React from "react";
import logo from "../../Imgs/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
