import React from "react";

import AboutSlider from "../../Components/AboutSlider";
import AboutImage from "../../Assets/Images/about-img.jpg";
import AboutCarousel from "../../Components/AboutCarousel";

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <h1 className="display-1">ກ່ຽວກັບສະຖາບັນ</h1>
        <div className="about-items">
          <div className="item-wrapper">
            <div className="item">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <p>ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ</p>
          </div>

          <div className="item-wrapper">
            <div className="item">
              <i className="fa-solid fa-stamp"></i>
            </div>
            <p>ສັນຍາລັກ</p>
          </div>

          <div className="item-wrapper">
            <div className="item">
              <i className="fa-regular fa-handshake"></i>
            </div>
            <p>ການຮ່ວມມື</p>
          </div>
        </div>
      </div>

      <div className="container">
        <AboutSlider />
      </div>

      <div className="container">
        <div className="row">
          <div className="about-section__img">
            <img src={AboutImage} alt="" />
          </div>
          <div className="about-section__info">
            <h1 className="display-2">Life on Campus</h1>
            <h2 className="display-4">ວິທະຍາເຂດ ສຸດສະກະ</h2>
            <h3 className="display-4">
              SIT ພ້ອມຮັບຜູ້ທີ່ສົນໃຈສະໝັກເຂົ້າຮຽນທຸກຄົນ
            </h3>
            <p className="display-4">
              ໃນຮົ້ວສະຖາບັນ ຂອງພວກເຮົາເປັນສູນ ການຮຽນຮູ້ຂອງນັກສຶກສາ ແລະ
              ມີຄວາມອຳນວຍສະດວກໃຫ້ແກ່ນັກສຶກສາເຊັ່ນ: ມີຄອມພິວເຕີ
              ທີ່ສາມາດນຳໃຊ້ອິນເຕີເນັດໄດ້, ຫໍສະມຸດ ສະຖາບັນ, ທະນາຄານຈຳລອງ,
              ຫ້ອງປະຖົມພະຍາບານ, ພື້ນທີຄົ້ນຄວ້າບົດຮຽນ, ຫ້ອງປະຊຸມກວ້າງຂວາງ,
              ສະຖານທີ່ຈອດລົດ, ແລະ ສະຖານທີ່ສຳລັບກິດຈະກຳນັກສຶກສາ. ນອກນັ້ນ, ສະຖາບັນ
              ເຕັກໂນໂລຊີ ສຸດສະກະ
              ພວກເຮົາຍັງໄດ້ຮ່ວມມືກັບເດີ່ນກິລາເພື່ອຈັດກິດຈະກຳທາງດ້ານກິລາອີກດ້ວຍ.
              ນັກສຶກສາສາມາດນຳໃຊ້ Internet ໄດ້ທຸກເວລາ ຜ່ານລະບົບ WIFI ຂອງສະຖາບັນ
              ເພື່ອໃຫ້ນັກສຶກສາໄດ້ຄົ້ນຄວ້າບົດຮຽນ. ນອກຈາກນີ້, ສະຖາບັນ ເຕັກໂນໂລຊີ
              ສຸດສະກະ ຍັງມີກິດຈະກຳນອກຫລັກສູດ ຫລື ຊົມລົມຕ່າງໆເຊັ່ນ:{" "}
              <a href="https://svalao.com/">ກຸ່ມອາສາສຸດສະກະ</a>{" "}
              ເປັນສູນກາງກິດຈະກຳຕ່າງໆຂອງນັກສຶກສາ, ຊົມລົມ ຫຸ່ນຍົນ (Robot) ແລະ
              ອື່ນໆອີກຫລາກຫລາຍ.
            </p>
            <div className="button-wrapper">
              <button type="button">
                <i className="fa-solid fa-angle-left"></i>
                <span className="display-4">ວິທະຍາເຂດ ໂພນພະເນົາ</span>
                <div className="slide-left"></div>
              </button>
              <button type="button">
                <span className="display-4">ວິທະຍາເຂດ ໂພນສີນວນ</span>
                <i className="fa-solid fa-angle-right"></i>
                <div className="slide-right"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <AboutCarousel />
      </div>
    </div>
  );
};

export default About;
