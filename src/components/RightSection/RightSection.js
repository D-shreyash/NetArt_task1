import React from "react";
import AwardImage from "../../Imgs/2.png";
import "./RightSection.css";

function RightSection() {
  return (
    <div className="rightSection">
      <h4>
        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
        4th time.
      </h4>
      <ul class="bullet-list">
        <li>
          C.R.I.'s energy efficient products are well recognized by various
          Government Institutions.
        </li>
        <li>
          C.R.I. is the highest contributor in the country for the projects of
          EESL (Energy Efficiency Services Limited) to replace the old
          inefficient pumps with 5 Star rated energy efficient smart pumps with
          IoT enabled control panel.
        </li>
      </ul>

      <img src={AwardImage} alt="AwardImage" />
      <p>
        Government of India has awarded the
        <strong>"National Energy Conservation Award 2018"</strong> . Mr. G.
        Selvaraj, Joint Managing Director of C.R.I. Group received the award
        from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
        Honorable Minister of State.
      </p>
    </div>
  );
}

export default RightSection;
