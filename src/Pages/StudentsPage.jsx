import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const StudentsPage = () => {
  const PageName = "ນັກສຶກສາ";

  return (
    <div className="Students">
      <Navbar />
      <div className="page-header">
        <div className="page-header__title">{PageName}</div>
        <div className="page-header__breadcrumbs">
          <Link exact to="/">
            Home
          </Link>
          <span>/</span>
          <p>{PageName}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentsPage;