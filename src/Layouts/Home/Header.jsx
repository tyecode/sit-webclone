import React from "react";

import HeroImage from "../../Assets/Images/home-hero.png";

const Header = () => {
  return (
    <section className="header-section">
      <img src={HeroImage} alt="" />
      <div className="container">
        <div className="header-section__list">
          <div className="row">
            <button type="button">
              <p>ທຶນການສຶກສາ</p>
            </button>
            <button type="button">
              <p>ຫລັກສູດຊັ້ນສູງ</p>
            </button>
            <button type="button">
              <p>ຫລັກສູດປະລິນຍາຕີ</p>
            </button>
            <button type="button">
              <p>ຫລັກສູດໄລຍະສັ້ນ</p>
            </button>
          </div>
          <div className="row">
            <button type="button">
              <p>ດາວໂຫລດຟອມສະໝັກຮຽນ</p>
            </button>
            <button type="button">
              <p>ລົງທະບຽນອອນລາຍ</p>
            </button>
            <button type="button">
              <p>International Program</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
