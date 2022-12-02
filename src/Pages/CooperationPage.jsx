import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CooperationPage = () => {
  const PageName = "ສະຖາບັນ";
  const SubPageName = "ການຮ່ວມມື";

  return (
    <div className="about--cooperation">
      <Navbar />
      <div className="page-header">
        <div className="page-header__title">{SubPageName}</div>
        <div className="page-header__breadcrumbs">
          <Link exact to="/">
            Home
          </Link>
          <span>/</span>
          <Link to="/ສະຖາບັນ">{PageName}</Link>
          <span>/</span>
          <p>{SubPageName}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CooperationPage;
