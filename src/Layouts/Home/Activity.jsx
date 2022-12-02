import React from "react";
import ActivityCarousel from "../../Components/ActivityCarousel";

import Img1 from "../../Assets/Images/Activity/activity-1.jpg";
import Img2 from "../../Assets/Images/Activity/activity-2.jpg";
import Img3 from "../../Assets/Images/Activity/activity-3.jpg";
import Img4 from "../../Assets/Images/Activity/activity-4.jpg";
import Img5 from "../../Assets/Images/Activity/activity-5.jpg";
import Img6 from "../../Assets/Images/Activity/activity-placeholder.jpg";
import Img7 from "../../Assets/Images/Activity/activity-placeholder.jpg";
import Img8 from "../../Assets/Images/Activity/activity-placeholder.jpg";

const Activity = () => {
  return (
    <div className="activity-section">
      <ActivityCarousel />

      <div className="institutional-activity">
        <div className="container">
          <div className="wrapper">
            <div className="col">
              <h1 className="display-2">ກິດຈະກຳ ສະຖາບັນ</h1>
              <p className="display-4">ແຜນກິດຈະກຳປະຈຳສົກຮຽນ</p>
            </div>

            <div className="col">
              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img1} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ໃນວັນທີ 19 ກໍລະກົດ 2022 ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ
                      ໄດ້ເຂົ້າຮ່ວມກອງປະຊຸມ
                    </p>
                  </div>
                  <div className="content-info__date">19/07/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img2} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ຄະນະອາຈານ ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ ຂື້ນຮັບໃບຍ້ອງຍໍ ຈາກ
                      ກະຊວງສຶກສາທິການ ແລະ ກິລາ
                    </p>
                  </div>
                  <div className="content-info__date">16/07/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img3} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ສະຖາບັນໄດ້ປະກອບສ່ວນຊຸກຍູ້ການຝຶກຊ້ອມຂອງຄະນະນັກກິລາຄົນພິການທີມຊາດລາວ
                    </p>
                  </div>
                  <div className="content-info__date">14/07/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img4} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ໃນຕອນບ່າຍ ຂອງວັນທີ 11 ກໍລະກົດ 2022 ທີ່ ສະຖາບັນ ເຕັກໂນໂລຊີ
                      ສຸດສະກະ ໄດ້ຈັດກອງປະຊຸມ
                    </p>
                  </div>
                  <div className="content-info__date">12/07/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img5} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ຄະນະຊາວໜຸ່ມສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ
                      ອອກກິດຈະກຳຕັ້ງຄ້າຍຝຶກອົບຮົມ ການເປັນຜູ້ນໍາພາ
                    </p>
                  </div>
                  <div className="content-info__date">08/07/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img6} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ວັນທີ 30 ມີນາ 2022 ສະຖາບັນໄດ້ຈັດກອງປະຊຸມ
                      ເຜີຍແຜ່ມາດຕະຖານຫຼັກສູດແຫ່ງຊາດ ສະບັບປັບປຸງ
                    </p>
                  </div>
                  <div className="content-info__date">30/03/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img7} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      ໃກ້ຈະເສັງແລ້ວໃຫ້ພາກັນຕັ້ງໃຈເບິ່ງບົດຮຽນເດີ 📝
                    </p>
                  </div>
                  <div className="content-info__date">27/01/22</div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="content-img">
                  <img src={Img8} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="content-info">
                  <div className="content-info__title">
                    <p className="display-4">
                      📚ເຂົ້າຮຽນ 08:30 ຕື່ນ 08:25 ມີຢູ່ບໍ່ຍົກມືແດ່ ✋
                    </p>
                  </div>
                  <div className="content-info__date">15/01/22</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
