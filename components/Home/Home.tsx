import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import Price from "./Price/Price";
import Footer from "./Footer/Footer";

const Home = () => {
  return <div className="overflow-hidden ">
    <Hero/>
    <WhyChoose/>
    <AnalyticsFeature/>
    <Feature/>
    <Review/>
    <Price/>
    <Footer/>
  </div>;
};

export default Home;
