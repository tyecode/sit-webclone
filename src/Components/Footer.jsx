import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__link">
          <div className="col">
            <div className="col-link">
              <h1 className="col-link__title">Quick Link</h1>
              <div className="col-link__wrapper">
                <ul>
                  <li>
                    <NavLink
                      exact
                      to="/ການສະໝັກນັກສຶກສາ"
                      activeClassName="footer-link-active"
                    >
                      ການສະໝັກນັກສຶກສາ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາວິທະຍາສາດຄອມພິວເຕີ"
                      activeClassName="footer-link-active"
                    >
                      ສາຂາວິທະຍາສາດຄອມພິວເຕີ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂານິເທດສາດ"
                      activeClassName="footer-link-active"
                    >
                      ສາຂານິເທດສາດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາບໍລິຫານທຸລະກິດ"
                      activeClassName="footer-link-active"
                    >
                      ສາຂາບໍລິຫານທຸລະກິດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາການເງິນ-ການທະນາຄານ"
                      activeClassName="footer-link-active"
                    >
                      ສາຂາການເງິນ-ການທະນາຄານ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ການສະໝັກນັກສຶກສາ/ປະຕິທິນຮັບນັກສຶກສາ"
                      activeClassName="footer-link-active"
                    >
                      ປະຕິທິນຮັບນັກສຶກສາ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ການສະໝັກນັກສຶກສາ/ເງື່ອນໄຂການຮັບນັກສຶກສາ"
                      activeClassName="footer-link-active"
                    >
                      ເງື່ອນໄຂການຮັບນັກສຶກສາ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ການສະໝັກນັກສຶກສາ/ປື້ມແບບຮຽນ"
                      activeClassName="footer-link-active"
                    >
                      ປື້ມແບບຮຽນ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-link">
              <h1 className="col-link__title">ກ່ຽວກັບວິທະຍາໄລ</h1>
              <div className="col-link__wrapper">
                <ul>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ປະຫວັດຄວາມເປັນມາ"
                      activeClassName="footer-link-active"
                    >
                      ປະຫວັດຄວາມເປັນມາ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ວິໄສທັດ-ພາລະກິດ-ແລະ-ພັນທະກິດ"
                      activeClassName="footer-link-active"
                    >
                      ວິໄສທັດ, ພາລະກິດ ແລະ ພັນທະກິດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ສັນຍະລັກຂອງສະຖາບັນ"
                      activeClassName="footer-link-active"
                    >
                      ສັນຍະລັກຂອງສະຖາບັນ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ"
                      activeClassName="footer-link-active"
                    >
                      ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ການຮ່ວມມື"
                      activeClassName="footer-link-active"
                    >
                      ການຮ່ວມມື
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ"
                      activeClassName="footer-link-active"
                    >
                      ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="col-link">
              <h1 className="col-link__title">ກິດຈະກຳນັກສຶກສາ</h1>
              <div className="col-link__wrapper">
                <ul>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ປະຫວັດຄວາມເປັນມາ"
                      activeClassName="footer-link-active"
                    >
                      ປະຫວັດຄວາມເປັນມາ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ວິໄສທັດ-ພາລະກິດ-ແລະ-ພັນທະກິດ"
                      activeClassName="footer-link-active"
                    >
                      ວິໄສທັດ, ພາລະກິດ ແລະ ພັນທະກິດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ສັນຍະລັກຂອງສະຖາບັນ"
                      activeClassName="footer-link-active"
                    >
                      ສັນຍະລັກຂອງສະຖາບັນ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ"
                      activeClassName="footer-link-active"
                    >
                      ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ການຮ່ວມມື"
                      activeClassName="footer-link-active"
                    >
                      ການຮ່ວມມື
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ສະຖາບັນ/ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ"
                      activeClassName="footer-link-active"
                    >
                      ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2021 Soutsaka Institute of Technology, All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
