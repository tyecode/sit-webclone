import React from "react";

import Img1 from "../Assets/Images/Thumbnail/about-thumbnail-1.jpg";
import Img2 from "../Assets/Images/Thumbnail/about-thumbnail-2.jpg";
import Img3 from "../Assets/Images/Thumbnail/about-thumbnail-3.jpg";
import Img4 from "../Assets/Images/Thumbnail/about-thumbnail-4.jpg";

const MajorThumbnail = () => {
  return (
    <div className="major-thumbnail">
      <div className="thumbnail-wrapper">
        <img src={Img1} alt="Finance and Banking" />
        <div className="overlay"></div>
        <div className="detail">
          <div className="detail-icons">
            <span className="icon">
              <i className="fa-solid fa-up-right-from-square"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <div className="detail-title">
            <p>ສາຂາການເງິນ-ການທະນາຄານ</p>
          </div>
          <div className="detail-more">
            <p>Read more</p>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div className="thumbnail-wrapper">
        <img src={Img2} alt="Communication Art" />
        <div className="overlay"></div>
        <div className="detail">
          <div className="detail-icons">
            <span className="icon">
              <i className="fa-solid fa-up-right-from-square"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <div className="detail-title">
            <p>ສາຂານິເທດສາດ</p>
          </div>
          <div className="detail-more">
            <p>Read more</p>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div className="thumbnail-wrapper">
        <img src={Img3} alt="Business Administration" />
        <div className="overlay"></div>
        <div className="detail">
          <div className="detail-icons">
            <span className="icon">
              <i className="fa-solid fa-up-right-from-square"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <div className="detail-title">
            <p>ສາຂາບໍລິຫານທຸລະກິດ</p>
          </div>
          <div className="detail-more">
            <p>Read more</p>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div className="thumbnail-wrapper">
        <img src={Img4} alt="Computer Science" />
        <div className="overlay"></div>
        <div className="detail">
          <div className="detail-icons">
            <span className="icon">
              <i className="fa-solid fa-up-right-from-square"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <div className="detail-title">
            <p>ສາຂາວິທະຍາສາດຄອມພິວເຕີ</p>
          </div>
          <div className="detail-more">
            <p>Read more</p>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorThumbnail;
