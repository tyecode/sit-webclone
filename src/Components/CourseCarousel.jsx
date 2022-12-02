import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import Img1 from "../Assets/Images/Carousel/course-carousel-1.jpg";
import Img2 from "../Assets/Images/Carousel/course-carousel-2.jpg";
import Img3 from "../Assets/Images/Carousel/course-carousel-3.jpg";
import Img4 from "../Assets/Images/Carousel/course-carousel-4.jpg";
import Img5 from "../Assets/Images/Carousel/course-carousel-5.jpg";
import Img6 from "../Assets/Images/Carousel/course-carousel-6.jpg";
import Img7 from "../Assets/Images/Carousel/course-carousel-7.jpg";
import Img8 from "../Assets/Images/Carousel/course-carousel-8.jpg";
import Img9 from "../Assets/Images/Carousel/course-carousel-9.jpg";
import Img10 from "../Assets/Images/Carousel/course-carousel-10.jpg";
import Img11 from "../Assets/Images/Carousel/course-carousel-11.jpg";
import Img12 from "../Assets/Images/Carousel/course-carousel-12.jpg";
import Img13 from "../Assets/Images/Carousel/course-carousel-13.jpg";

const CourseCarousel = () => {
  const swiperRef = useRef();

  return (
    <div className="course-carousel">
      <div className="container">
        <div className="course-carousel__heading">
          <span></span>
          <h1 className="display-4">ຫລັກສູດໄລຍະສັ້ນ</h1>
          <span></span>
        </div>
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
            delay: 5000,
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
                  <p>ລົງທະບຽນຝຶກອົບຮົມໄລຍະສັ້ນ</p>
                </div>
                <div className="detail-date">
                  <p>08/08/20</p>
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
                  <p>ການຝຶກອົບຮົມໄລຍະສັ້ນ ໃຫ້ກຸມວິຊາ STEM</p>
                </div>
                <div className="detail-date">
                  <p>29/07/20</p>
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
                  <p>ເປີດຊຸດຝຶກອົບຮົມໄລຍະສັ້ນ</p>
                </div>
                <div className="detail-date">
                  <p>19/06/20</p>
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
                  <p>
                    ວິທະຍາໄລ ສຸດສະກະ ເພື່ອການບໍລິຫານ ແລະ ເທັກໂນໂລຢີ
                    ຈະເປີດຊຸດຝຶກອົບຮົມໄລຍະສັ້ນ 2 ຫົວຂໍ້
                  </p>
                </div>
                <div className="detail-date">
                  <p>19/06/20</p>
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
                  <p>ວິທະຍາໄລ ສຸດສະກະ ເປີດຊຸດຝຶກອົບຮົມໄລຍະສັ້ນ</p>
                </div>
                <div className="detail-date">
                  <p>05/06/20</p>
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
                    ຊຸດຝຶກອົບຮົມໄລຍະສັ້ນກຸ່ມວິຊາ STEM (Science Technology
                    Engineer and Mathematics)
                  </p>
                </div>
                <div className="detail-date">
                  <p>21/05/20</p>
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
                  <p>ວິທະຍາໄລ ສຸດສະກະ ເປີດເຝິກອົບຮົມໄລຍະສັ້ນ</p>
                </div>
                <div className="detail-date">
                  <p>21/11/20</p>
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
                  <p>ເປີດເຝຶກອົບຮົມ ໄລຍະສັ້ນ Microsoft Office ລຸ້ນທີ 15</p>
                </div>
                <div className="detail-date">
                  <p>07/09/19</p>
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
                  <p>ເປີດຮັບນັກຮຽນຫລັກສູດໄລຍະສັ້ນ Graphic Design</p>
                </div>
                <div className="detail-date">
                  <p>10/07/19</p>
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
                  <p>ເປີດສອນເຝິກອົບຮົມໄລຍະສັ້ນ</p>
                </div>
                <div className="detail-date">
                  <p>09/07/19</p>
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
                  <p>ຫລັກສູດໄລຍະສັ້ນສໍາຫລັບວຽກຫ້ອງການ</p>
                </div>
                <div className="detail-date">
                  <p>05/07/19</p>
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
                  <p>ເປີດສອນຫຼັກສູດຄອມພິວເຕີໄລຍະສັ້ນ</p>
                </div>
                <div className="detail-date">
                  <p>04/07/19</p>
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
                    ວິທະຍາໄລ ສຸດສະກະ ເປີດສອນຫຼັກສູດໄລຍະສັ້ນ ພື້ນຖານໃຫ້ກັບນ້ອງໆ
                  </p>
                </div>
                <div className="detail-date">
                  <p>05/06/17</p>
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
    </div>
  );
};

export default CourseCarousel;
