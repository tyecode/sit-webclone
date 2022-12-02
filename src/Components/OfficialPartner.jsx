import React from "react";

import Img1 from "../Assets/Images/OfficialPartner/synesis.png";
import Img2 from "../Assets/Images/OfficialPartner/lao-gas.jpg";
import Img3 from "../Assets/Images/OfficialPartner/foton.jpg";
import Img4 from "../Assets/Images/OfficialPartner/borgward.png";

const OfficialPartner = () => {
  return (
    <div className="official-partner">
      <div className="container">
        <div className="official-partner__heading">
          <span></span>
          <h1 className="display-4">OFFICIAL PARTNER</h1>
          <span></span>
        </div>
        <div className="official-partner__wrapper">
          <div className="items">
            <img src={Img1} alt="Synesis" />
            <div className="overlay"></div>
          </div>
          <div className="items">
            <img src={Img2} alt="Lao Gas" />
            <div className="overlay"></div>
          </div>
          <div className="items">
            <img src={Img3} alt="Foton" />
            <div className="overlay"></div>
          </div>
          <div className="items">
            <img src={Img4} alt="Borgward" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialPartner;
