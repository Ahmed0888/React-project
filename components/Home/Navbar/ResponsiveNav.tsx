// 'use client';
// import React, { useState } from 'react'
// import Nav from './Nav'
// import MobileNav from './MobileNav'

// const ResponsiveNav = () => {

//   const [showNav,setShowNav]=useState(false);
//   const handleNavShow=()=>{
//     setShowNav(true);  
//   };
//   const handleNavhide=()=>{
//     setShowNav(false);  
//   }; 

//   return (
//     <div>
//         <Nav openNav ={handleNavShow}/>
//         <MobileNav showNav={showNav} closeNav={handleNavhide}
//         />
//     </div>
//   )
// }

// export default ResponsiveNav


"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import JoinNowModal from "../../JoinNowModal/JoinNowModal";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);

  const handleNavShow = () => setShowNav(true);
  const handleNavHide = () => setShowNav(false);

  useEffect(() => {
    const handleOpen = () => setOpenJoin(true);
    window.addEventListener("openJoinModal", handleOpen);

    return () => {
      window.removeEventListener("openJoinModal", handleOpen);
    };
  }, []);

  return (
    <>
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />

      <JoinNowModal isOpen={openJoin} onClose={() => setOpenJoin(false)} />
    </>
  );
};

export default ResponsiveNav;
