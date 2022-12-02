import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/autoplay";

import Img1 from "../Assets/Images/Activity/activity-1.jpg";
import Img2 from "../Assets/Images/Activity/activity-2.jpg";
import Img3 from "../Assets/Images/Activity/activity-3.jpg";
import Img4 from "../Assets/Images/Activity/activity-4.jpg";
import Img5 from "../Assets/Images/Activity/activity-5.jpg";
import Img6 from "../Assets/Images/Activity/activity-placeholder.jpg";
import Img7 from "../Assets/Images/Activity/activity-placeholder.jpg";
import Img8 from "../Assets/Images/Activity/activity-placeholder.jpg";

const NewsBoardCarousel = () => {
  const swiperRef = useRef();

  return (
    <div className="news-board-carousel">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        speed={800}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <img src={Img1} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jul</span>
              <span>19</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ໃນວັນທີ 19 ກໍລະກົດ 2022 ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ
              ໄດ້ເຂົ້າຮ່ວມກອງປະຊຸມ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img2} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jul</span>
              <span>16</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ຄະນະອາຈານ ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ ຂື້ນຮັບໃບຍ້ອງຍໍ ຈາກ
              ກະຊວງສຶກສາທິການ ແລະ ກິລາ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img3} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jul</span>
              <span>14</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ສະຖາບັນໄດ້ປະກອບສ່ວນຊຸກຍູ້ການຝຶກຊ້ອມຂອງຄະນະນັກກິລາຄົນພິການທີມຊາດລາວ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img4} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jul</span>
              <span>12</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ໃນຕອນບ່າຍ ຂອງວັນທີ 11 ກໍລະກົດ 2022 ທີ່ ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ
              ໄດ້ຈັດກອງປະຊຸມ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img5} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jul</span>
              <span>8</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ຄະນະຊາວໜຸ່ມສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ ອອກກິດຈະກຳຕັ້ງຄ້າຍຝຶກອົບຮົມ
              ການເປັນຜູ້ນໍາພາ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img6} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Mar</span>
              <span>30</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ວັນທີ 30 ມີນາ 2022 ສະຖາບັນໄດ້ຈັດກອງປະຊຸມ
              ເຜີຍແຜ່ມາດຕະຖານຫຼັກສູດແຫ່ງຊາດ ສະບັບປັບປຸງ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img7} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jan</span>
              <span>27</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              ໃກ້ຈະເສັງແລ້ວໃຫ້ພາກັນຕັ້ງໃຈເບິ່ງບົດຮຽນເດີ 📝
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Img8} alt="" />
            <div className="overlay"></div>
            <div className="date">
              <span>Jan</span>
              <span>5</span>
              <span>2022</span>
            </div>
            <p className="display-3">
              📚ເຂົ້າຮຽນ 08:30 ຕື່ນ 08:25 ມີຢູ່ບໍ່ຍົກມືແດ່ ✋
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsBoardCarousel;
