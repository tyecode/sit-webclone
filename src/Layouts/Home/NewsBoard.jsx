import React from "react";

import Notice1 from "../../Assets/Images/NewsBoard/notice-1.jpg";
import Notice2 from "../../Assets/Images/NewsBoard/notice-2.jpg";
import Notice3 from "../../Assets/Images/NewsBoard/notice-3.jpg";
import NewsBoardCarousel from "../../Components/NewsBoardCarousel";

const NewsBoard = () => {
  return (
    <div className="news-board">
      <div className="container">
        <h1 className="display-1">
          ກະດານຂ່າວ <span>ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ</span>
        </h1>
        <div className="row">
          {/* News Board - Institutional News Section */}

          <div className="institutional-news">
            <h2 className="display-2">ຂ່າວສານ ສະຖາບັນ</h2>
            <NewsBoardCarousel />
          </div>

          {/* News Board - Notcie Section  */}

          <div className="notice">
            <h2 className="display-2">ແຈ້ງການ</h2>
            <div className="notice-content-wrapper">
              <div className="notice-content">
                <div className="notice-content-img">
                  <img src={Notice1} alt="" />
                </div>
                <div className="notice-content-info">
                  <div className="notice-content-info__title display-4">
                    ແຈ້ງການ ພັກການຮຽນ - ການສອນ
                  </div>
                  <div className="notice-content-info__date">31/05/22</div>
                </div>
              </div>

              <div className="notice-content">
                <div className="notice-content-img">
                  <img src={Notice2} alt="" />
                </div>
                <div className="notice-content-info">
                  <div className="notice-content-info__title display-4">
                    ແຈ້ງການດ່ວນ, ໂຈະການຮຽນ-ການສອນ ໃນຫ້ອງຮຽນ ຊົ່ວຄາວ
                  </div>
                  <div className="notice-content-info__date">31/05/22</div>
                </div>
              </div>

              <div className="notice-content">
                <div className="notice-content-img">
                  <img src={Notice3} alt="" />
                </div>
                <div className="notice-content-info">
                  <div className="notice-content-info__title display-4">
                    📝ເປີດຮັບນັກສຶກສາປະລີນຍາຕີ👩‍🎓
                  </div>
                  <div className="notice-content-info__date">31/05/22</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
