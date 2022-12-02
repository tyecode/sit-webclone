import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import Img1 from "../Assets/Images/Carousel/activity-carousel-1.jpg";
import Img2 from "../Assets/Images/Carousel/activity-carousel-2.jpg";
import Img3 from "../Assets/Images/Carousel/activity-carousel-3.jpg";
import Img4 from "../Assets/Images/Carousel/activity-carousel-4.jpg";
import Img5 from "../Assets/Images/Carousel/activity-carousel-5.jpg";
import Img6 from "../Assets/Images/Carousel/activity-carousel-6.jpg";
import Img7 from "../Assets/Images/Carousel/activity-carousel-7.jpg";
import Img8 from "../Assets/Images/Carousel/activity-carousel-8.jpg";
import Img9 from "../Assets/Images/Carousel/activity-carousel-9.jpg";
import Img10 from "../Assets/Images/Carousel/activity-carousel-10.jpg";
import Img11 from "../Assets/Images/Carousel/activity-carousel-11.jpg";
import Img12 from "../Assets/Images/Carousel/activity-carousel-12.jpg";
import Img13 from "../Assets/Images/Carousel/activity-carousel-13.jpg";
import Img14 from "../Assets/Images/Carousel/activity-carousel-14.jpg";
import Img15 from "../Assets/Images/Carousel/activity-carousel-15.jpg";
import Img16 from "../Assets/Images/Carousel/activity-carousel-16.jpg";
import Img17 from "../Assets/Images/Carousel/activity-carousel-17.jpg";
import Img18 from "../Assets/Images/Carousel/activity-carousel-18.jpg";
import Img19 from "../Assets/Images/Carousel/activity-carousel-19.jpg";
import Img20 from "../Assets/Images/Carousel/activity-carousel-20.jpg";

const ActivityCarousel = () => {
  const swiperRef = useRef();

  return (
    <div className="activity-section-carousel">
      <h1 className="display-2">ກິດຈະກຳເດັ່ນ</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        speed={2500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img1} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ຍິນດີກັບນ້ອງໆທີ່ໄດ້ຊະນະເລີດ ແລະ ຮອງຊະນະເລີດ ໃນການ ຖາມຕອບຄຳຖາມ
                  ICT ຂອງນັກສຶກສາຄັ້ງທີ 2, ທີ່ ວິທະຍາໄລ ສຸດສະກະ #31/07/2020
                </p>
              </div>
              <div className="detail-date">
                <p>30/07/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img2} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ກິດຈະກຳ ຖາມຕອບຄຳຖາມ ICT ຂອງນັກສຶກສາ ຄັ້ງທີ 2 ຄັ້ງວັນທີ
                  16-17/2020
                </p>
              </div>
              <div className="detail-date">
                <p>16/07/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img3} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ນັກສຶກສາ ສາຂານິເທດສາດໄດ້ເຂົ້າຮ່ວມກັນແຂ່ງຂັນ HOPPIN Film Award
                  2020 ແລະ ໄດ້ຮັບລາງວັນຊະນະເລີດ
                </p>
              </div>
              <div className="detail-date">
                <p>02/07/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img4} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>ການແຂ່ງຂັນ ລາຍການ ASEAN Data Science Explorers 2020</p>
              </div>
              <div className="detail-date">
                <p>11/05/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img5} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>Soutsaka Marketplace ເດັກສຸດສະກະ ຈະຝາກຮ້ານ</p>
              </div>
              <div className="detail-date">
                <p>26/04/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img6} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ໂທລະພາບແຫ່ງຊາດລາວ ໄດ້ສຳພາດນັກສຶກສາ ວິທະຍາໄລ ສຸດສະກະ
                  ທີ່ໄປແຂ່ງຂັນ ການສ້າງ Web blog ໃນໂຄງການ ASEAN Digital
                  Innovation
                </p>
              </div>
              <div className="detail-date">
                <p>16/04/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img7} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>ໂຄງການ ການແຂ່ງຂັນ Data Science Explorer</p>
              </div>
              <div className="detail-date">
                <p>21/02/20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img8} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ຂໍເຊີນນ້ອງໆນັກສຶກສາ ວິທະຍາໄລສຸດສະກະ
                  ຜູ້ທີ່ສົນໃຈສະໝັກເຂົ້າຊົມລົມ
                </p>
              </div>
              <div className="detail-date">
                <p>13/12/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img9} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ການແຂ່ງຂັນການສ້າງ web blog ໃນໂຄງການ ASEAN Digital Innovation
                  ພາຍໃຕ້ຫົວຂໍ້ Future Ready ASEAN
                </p>
              </div>
              <div className="detail-date">
                <p>04/12/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img10} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ໂຄງການ ASEAN Digital Innovation Programme, Bangkok 27-29
                  November 2019 ພາຍໃນຫົວຂໍ້ Future Ready ASEAN
                </p>
              </div>
              <div className="detail-date">
                <p>29/11/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img11} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ທີມນັກສຶກສາ ວິທະຍາໄລ ສຸດສະກະ ໄດ້ເດີນທາງໄປແຂ່ງຂັນ ການສ້າງ blog
                  site ພາຍໃຕ້ແຜນງານ ASEAN Digital Innovation Programme: Future
                  Ready ASEAN
                </p>
              </div>
              <div className="detail-date">
                <p>27/11/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img12} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>ວິທະຍາໄລ ສຸດສະກະ ເປີດເຝິກອົບຮົມໄລຍະສັ້ນ</p>
              </div>
              <div className="detail-date">
                <p>21/11/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img13} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ການຄັດເລືອກເຂົ້າຮອບສຸດທ້າຍ ໃນການແຂ່ງຂັນການສ້າງ Blog site
                  ເພື່ອອານຸລັກສິ່ງແວດລ້ອມ ໃນໂຄງການ Future Ready ASEAN 2019
                </p>
              </div>
              <div className="detail-date">
                <p>08/11/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img14} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ການກະກຽມເຂົ້າຮ່ວມການແຂ່ງຂັນ ການພັດທະນາເວັບໄຊ ໃນຫົວຂໍ້ Future
                  Ready ASEAN
                </p>
              </div>
              <div className="detail-date">
                <p>20/09/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img15} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ການແຂ່ງຂັນຫຸ່ນຍົນ Sumo Combat ຮອບຄັດເລືອກລາງວັນຊົມເຊີຍ ແລະ
                  ຮອບຊິງຊະນະເລີດ
                </p>
              </div>
              <div className="detail-date">
                <p>14/06/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img16} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>ການແຂ່ງຂັນຫຸ່ນຍົນ ຂອງນັກສຶກສາ ວິທະຍາໄລ ສຸດສະກະ</p>
              </div>
              <div className="detail-date">
                <p>14/06/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img17} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ການແຂ່ງຂັນຫຸ່ນຍົນ Sumo Combat ຂອງນັກສຶກ ວິທະຍາໄລສຸດສະກະ ສົກຮຽນ
                  2018-2019
                </p>
              </div>
              <div className="detail-date">
                <p>14/06/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img18} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>ເລີ່ມການແຂ່ງຂັນຫຸ່ນຍົນຮອບຄັດເລືອກ SCMT Robot</p>
              </div>
              <div className="detail-date">
                <p>07/06/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img19} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>ການແຂ່ງຂັນຫຸ່ນຍົນຮອບຄັດເລືອກ SCMT Robot</p>
              </div>
              <div className="detail-date">
                <p>07/06/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={Img20} alt="" />
            <div className="overlay"></div>
            <div className="detail">
              <div className="detail-icons">
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="icon">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
              </div>
              <div className="detail-title">
                <p>
                  ຂໍເຊີນທ່ານຮ່ວມໂຫວດ ໃຫ້ທີມທີ່ເຂົ້າແຂ່ງຂັນຫຸ່ນຍົນ SCMT Robot
                  Game 2019 (SUMO Combat)
                </p>
              </div>
              <div className="detail-date">
                <p>05/06/19</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ActivityCarousel;
