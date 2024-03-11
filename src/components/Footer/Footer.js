import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p>
        <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
      </p>

      <p>
        CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS &
        DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
        BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
        AGRICULTURE & RESIDENTIAL
      </p>

      <div className="Inner-footer">
        <div className="footerIcon">
          <IoCall />
          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="footerIcon">
          <IoLogoFacebook />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="footerIcon">
          <FaGlobe />
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
