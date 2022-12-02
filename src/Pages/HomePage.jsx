import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Layouts/Home/Header";
import About from "../Layouts/Home/About";
import Thumbnail from "../Components/MajorThumbnail";
import NewsBoard from "../Layouts/Home/NewsBoard";
import Activity from "../Layouts/Home/Activity";
import CourseCarousel from "../Components/CourseCarousel";
import Testinial from "../Components/Testimonial";
import OfficialPartner from "../Components/OfficialPartner";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <About />
      <Thumbnail />
      <NewsBoard />
      <Activity />
      <CourseCarousel />
      <Testinial />
      <OfficialPartner />
      <Footer />
    </div>
  );
};

export default HomePage;
