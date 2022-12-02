import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

import Img1 from "../Assets/Images/Testimonial/testimonial-1.jpeg";
import Img2 from "../Assets/Images/Testimonial/testimonial-2.jpeg";
import Img3 from "../Assets/Images/Testimonial/testimonial-3.jpeg";

const Testinial = () => {
  const swiperRef = useRef();

  return (
    <div className="testimonial">
      <div className="container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={600}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="slide-wrapper">
              <div className="portrait">
                <img src={Img1} alt="" />
              </div>
              <div className="detail">
                <h1 className="detail__name">ແກ້ວສົມບັດ ແກ້ວມະນີວົງ</h1>
                <h2 className="detail__jobs">ນັກການຕະຫລາດອອນລາຍ</h2>
                <p className="display-4">
                  ສະບາຍດີຂ້າພະເຈົ້າແກ້ວສົມບັດ ແກ້ວມະນີວົງ ຈົບມາຈາກວິທະຍາໄລ
                  ສຸດສະກະ ເພື່ອການບໍລິຫານ ແລະ ເທັກໂນໂລຢີ ປະລິນຍາຕີລຸ້ນທີ່ 6
                  ເຊິ່ງເປັນລຸ້ນສຸດທ້າຍຂອງວິທະຍາໄລ,
                  ສ່ວນໂຕຂ້າພະເຈົ້າເອງຕອນຮຽນຢູ່ປີ 3 ໄດ້ມີໂອກາດໄປຝຶກງານກັບບໍລິສັດ
                  ລາວສຕ້າ ແຊນແນວ ແລະ
                  ໄດ້ເຂົ້າເຮັດວຽກນຳເພິ່ນຕັ້ງແຕ່ນັ້ນມາເພາະໂຕເອງມີຄວາມສົນໃຈທາງດ້ານຂໍ້ມູນຂ່າວສານ
                  ແລະ ສື່ອອນໄລນ໌ຢູ່ແລ້ວ
                </p>
                <div className="detail__more">
                  <Link to="">read more</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <div className="portrait">
                <img src={Img2} alt="" />
              </div>
              <div className="detail">
                <h1 className="detail__name">ທ້າວ ສຸດປະເສີດ ຈັນທຸມພອນ</h1>
                <h2 className="detail__jobs">ນັກອອກແບບສີອອນລາຍ</h2>
                <p>
                  ຂ້າພະເຈົ້າ ທ້າວ ສຸດປະເສີດ ຈັນທຸມພອນ ໄດ້ສຳເລັດການສຶກສາໃນປີ 2016
                  ໃນສາຂາ ວິທະຍາສາດຄອມພິວເຕີ ແລະ ສາຂາ ບໍລິຫານທຸລະກິດ ແລະ ເສດຖະສາດ
                  ໃນລະດັບປະລິນຍາຕຼີ ທີ່ວິທະຍາໄລ ສຸດສະກະ ເພື່ອການບໍລິຫານ ແລະ
                  ເທັກໂນໂລຢີ.
                </p>
                <div className="detail__more">
                  <Link to="">read more</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <div className="portrait">
                <img src={Img3} alt="" />
              </div>
              <div className="detail">
                <h1 className="detail__name">ນາງ ມີນາ ສອນກອງ</h1>
                <h2 className="detail__jobs">ນັກຂ່າວ</h2>
                <p>
                  ອາດີດນັກສຶກສາ ວິທະຍາໄລສຸດສະກະ ເພື່ອການບໍລິຫານ ແລະ ເທັກໂນໂລຢີ
                  ຫລັງຈາກຮຽນຈົບ ສາຂານິເທດສາດ ໃນປີ 2015 ແມ່ນໄດ້ໄປສະໝັກວຽກ
                  ຢູ່ສະຖານນີ ວິທະຍຸ ໂທລະພາບ ນະຄອນຫລວງວຽງຈັນ. ໃນຕົ້ນປີ2016 ແລະ
                  ໄດ້ບັນຈຸພະນັກງານລັດຖະກອນ 95%.
                </p>
                <div className="detail__more">
                  <Link to="">read more</Link>
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

export default Testinial;
