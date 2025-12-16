'use client';
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import Price from "./Price/Price";
import Offer from "./Offer/Offer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

  useEffect(()=>{
    const initAos = async () => {
      await import('aos');
      AOS.init({ 
        duration: 1000,
      easing: 'ease',
    once:true,
  anchorPlacement: 'top-bottom',});
    }
    initAos();

  },[])

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4YJML9QWGP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4YJML9QWGP');
</script>
  
  return <div className="overflow-hidden ">
    <Hero/>
    <WhyChoose/>
    <AnalyticsFeature/>
    <Feature/>
    <Review/>
    <Price/>
    <Offer/>
    
  </div>;
};

export default Home;
