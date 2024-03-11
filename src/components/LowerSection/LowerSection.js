import React from "react";
import "./LowerSection.css";
import machine from "../../Imgs/3.png";

function LowerSection() {
  return (
    <div className="lowerSection">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={machine} alt="" />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
    </div>
  );
}

export default LowerSection;
