import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import LogoBrand from "../Assets/Images/logo-brand.png";
import SubImg1 from "../Assets/Images/Thumbnail/about-thumbnail-4.jpg";
import SubImg2 from "../Assets/Images/Thumbnail/about-thumbnail-2.jpg";
import SubImg3 from "../Assets/Images/Thumbnail/about-thumbnail-3.jpg";
import SubImg4 from "../Assets/Images/Thumbnail/about-thumbnail-1.jpg";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="Navbar">
      <div className="nav-header">
        <div className="container">
          <div className="wrapper">
            <div className="nav-header__info">
              <span>
                <i className="fa-solid fa-phone-volume"></i>
                <p>+856 (021) 755 222, 021 755 333</p>
              </span>
              <span>
                <i className="fa-regular fa-clock"></i>
                <p>Monday - Friday 10 AM - 8 PM</p>
              </span>
            </div>
            <div className="nav-header__social-media">
              <button type="button">
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button type="button">
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navbar */}

      <div className="nav">
        <div className="container">
          <div className="wrapper">
            <div className="nav-brand">
              <NavLink to="/">
                <img src={LogoBrand} alt="" />
              </NavLink>
            </div>
            <div className="nav-list">
              <ul>
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ໜ້າຫຼັກ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ສະຖາບັນ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ກ່ຽວກັບ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ສະຖາບັນ/ປະຫວັດຄວາມເປັນມາ">
                          ປະຫວັດຄວາມເປັນມາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ວິໄສທັດ-ພາລະກິດ-ແລະ-ພັນທະກິດ">
                          ວິໄສທັດ, ພາລະກິດ ແລະ ພັນທະກິດ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ສັນຍະລັກຂອງສະຖາບັນ">
                          ສັນຍະລັກຂອງສະຖາບັນ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ">
                          ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ">
                          ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ການຮ່ວມມື">ການຮ່ວມມື</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ພາກວິຊາ ແລະ ຫຼັກສູດ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="">
                          ພາກວິຊາ ເທັກໂນໂລຢີຂໍ້ມູນຂ່າວສານ
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </Link>
                        <div className="sub-dropdown">
                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາວິທະຍາສາດຄອມພິວເຕີ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg1} alt="" />
                              <h1>ສາຂາວິທະຍາສາດຄອມພິວເຕີ</h1>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="">
                          ພາກວິຊາ ນິເທດສາດ ແລະ ພາສາສາດ
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </Link>
                        <div className="sub-dropdown">
                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂານິເທດສາດ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg2} alt="" />
                              <h1>ສາຂານິເທດສາດ</h1>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="">
                          ພາກວິຊາ ບໍລິຫານທຸລະກິດ ແລະ ເສດຖະສາດ
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </Link>
                        <div className="sub-dropdown">
                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາບໍລິຫານທຸລະກິດ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg3} alt="" />
                              <h1>ສາຂາບໍລິຫານທຸລະກິດ</h1>
                            </div>
                          </Link>

                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາການເງິນ-ການທະນາຄານ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg4} alt="" />
                              <h1>ສາຂາການເງິນ-ການທະນາຄານ</h1>
                            </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ການສະໝັກນັກສຶກສາ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ການລົງທະບຽນ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ເງື່ອນໄຂການຮັບນັກສຶກສາ">
                          ເງື່ອນໄຂການຮັບນັກສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ຂໍ້ມູນສຳລັບຜູ້ປົກຄອງ">
                          ຂໍ້ມູນສຳລັບຜູ້ປົກຄອງ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ປະຕິທິນຮັບນັກສຶກສາ">
                          ປະຕິທິນຮັບນັກສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ປື້ມແບບຮຽນ">
                          <i className="fa-solid fa-swatchbook"></i>ປື້ມແບບຮຽນ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ນັກສຶກສາ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ນັກສຶກສາ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ນັກສຶກສາ/ກົດລະບຽບການສຶກສາ">
                          ກົດລະບຽບການສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ນັກສຶກສາ/ປະຕິທິນການສຶກສາ">
                          ປະຕິທິນການສຶກສາ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ການເຄື່ອນໄຫວ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ການເຄື່ອນໄຫວ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ຜົນງານນັກສຶກສາ">
                          ຜົນງານນັກສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ແຈ້ງການ">ແຈ້ງການ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ຂ່າວສານ">ຂ່າວສານ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ກິດຈະກຳ">ກິດຈະກຳ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ກຸ່ມສິນລະປະ">ກຸ່ມສິນລະປະ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ກຸ່ມຫຸ່ນຍົນ">ກຸ່ມຫຸ່ນຍົນ</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ຕິດຕໍ່"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ຕິດຕໍ່
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Navbar */}

      <div
        className={scrollPosition > 100 ? "nav-scroll active" : "nav-scroll"}
      >
        <div className="container">
          <div className="wrapper">
            <div className="nav-list">
              <ul>
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ໜ້າຫຼັກ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ສະຖາບັນ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ກ່ຽວກັບ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ສະຖາບັນ/ປະຫວັດຄວາມເປັນມາ">
                          ປະຫວັດຄວາມເປັນມາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ວິໄສທັດ-ພາລະກິດ-ແລະ-ພັນທະກິດ">
                          ວິໄສທັດ, ພາລະກິດ ແລະ ພັນທະກິດ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ສັນຍະລັກຂອງສະຖາບັນ">
                          ສັນຍະລັກຂອງສະຖາບັນ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ">
                          ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ">
                          ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ສະຖາບັນ/ການຮ່ວມມື">ການຮ່ວມມື</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ພາກວິຊາ ແລະ ຫຼັກສູດ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="">
                          ພາກວິຊາ ເທັກໂນໂລຢີຂໍ້ມູນຂ່າວສານ
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </Link>
                        <div className="sub-dropdown">
                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາວິທະຍາສາດຄອມພິວເຕີ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg1} alt="" />
                              <h1>ສາຂາວິທະຍາສາດຄອມພິວເຕີ</h1>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="">
                          ພາກວິຊາ ນິເທດສາດ ແລະ ພາສາສາດ
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </Link>
                        <div className="sub-dropdown">
                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂານິເທດສາດ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg2} alt="" />
                              <h1>ສາຂານິເທດສາດ</h1>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="">
                          ພາກວິຊາ ບໍລິຫານທຸລະກິດ ແລະ ເສດຖະສາດ
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </Link>
                        <div className="sub-dropdown">
                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາບໍລິຫານທຸລະກິດ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg3} alt="" />
                              <h1>ສາຂາບໍລິຫານທຸລະກິດ</h1>
                            </div>
                          </Link>

                          <Link to="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ/ສາຂາການເງິນ-ການທະນາຄານ">
                            <div className="sub-dropdown__wrapper">
                              <img src={SubImg4} alt="" />
                              <h1>ສາຂາການເງິນ-ການທະນາຄານ</h1>
                            </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ການສະໝັກນັກສຶກສາ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ການລົງທະບຽນ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ເງື່ອນໄຂການຮັບນັກສຶກສາ">
                          ເງື່ອນໄຂການຮັບນັກສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ຂໍ້ມູນສຳລັບຜູ້ປົກຄອງ">
                          ຂໍ້ມູນສຳລັບຜູ້ປົກຄອງ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ປະຕິທິນຮັບນັກສຶກສາ">
                          ປະຕິທິນຮັບນັກສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການສະໝັກນັກສຶກສາ/ປື້ມແບບຮຽນ">
                          <i className="fa-solid fa-swatchbook"></i>ປື້ມແບບຮຽນ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ນັກສຶກສາ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ນັກສຶກສາ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ນັກສຶກສາ/ກົດລະບຽບການສຶກສາ">
                          ກົດລະບຽບການສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ນັກສຶກສາ/ປະຕິທິນການສຶກສາ">
                          ປະຕິທິນການສຶກສາ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ການເຄື່ອນໄຫວ"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ການເຄື່ອນໄຫວ
                  </NavLink>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ຜົນງານນັກສຶກສາ">
                          ຜົນງານນັກສຶກສາ
                        </Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ແຈ້ງການ">ແຈ້ງການ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ຂ່າວສານ">ຂ່າວສານ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ກິດຈະກຳ">ກິດຈະກຳ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ກຸ່ມສິນລະປະ">ກຸ່ມສິນລະປະ</Link>
                      </li>
                      <li>
                        <Link to="/ການເຄື່ອນໄຫວ/ກຸ່ມຫຸ່ນຍົນ">ກຸ່ມຫຸ່ນຍົນ</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/ຕິດຕໍ່"
                    activeClassName="nav-active"
                    className="nav-hover"
                  >
                    ຕິດຕໍ່
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
