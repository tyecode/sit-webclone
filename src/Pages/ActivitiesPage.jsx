import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ActivitiesPage = () => {
  const PageName = "ການເຄື່ອນໄຫວ";
  const SubPageName = "ກິດຈະກຳ";

  return (
    <div className="action--activities">
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

export default ActivitiesPage;
