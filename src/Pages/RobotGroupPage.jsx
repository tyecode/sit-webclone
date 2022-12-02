import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RobotGroupPage = () => {
  const PageName = "ການເຄື່ອນໄຫວ";
  const SubPageName = "ກຸ່ມຫຸ່ນຍົນ";

  return (
    <div className="action--Robot-group">
      <Navbar />
      <div className="page-header">
        <div className="page-header__title">{SubPageName}</div>
        <div className="page-header__breadcrumbs">
          <Link exact to="/">
            Home
          </Link>
          <span>/</span>
          <Link to="/ການເຄື່ອນໄຫວ">{PageName}</Link>
          <span>/</span>
          <p>{SubPageName}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RobotGroupPage;
