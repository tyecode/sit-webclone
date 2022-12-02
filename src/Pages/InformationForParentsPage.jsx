import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const InformationForParentsPage = () => {
  const PageName = "ການສະໝັກນັກສຶກສາ";
  const SubPageName = "ຂໍ້ມູນສຳລັບຜູ້ປົກຄອງ";

  return (
    <div className="registration--information-for-parents">
      <Navbar />
      <div className="page-header">
        <div className="page-header__title">{SubPageName}</div>
        <div className="page-header__breadcrumbs">
          <Link exact to="/">
            Home
          </Link>
          <span>/</span>
          <Link to="/ການສະໝັກນັກສຶກສາ">{PageName}</Link>
          <span>/</span>
          <p>{SubPageName}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InformationForParentsPage;
