import { navLinks } from '@/constant/Constant';
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';
type props ={
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({closeNav,showNav}:props) => {
  const navOpen= showNav ? 'translate-x-0':'translate-x-[-100%]';

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4YJML9QWGP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4YJML9QWGP');
</script>

  return (
    <div>
      {/* overlay */}
      <div className ={`fixed ${navOpen} inset-0 transform transitiion-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen `}> </div>
      {/* NavLinks*/}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform  transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006] `}>
         {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link text-white text-[20px] ml-12 boarder-b-[1.5px] pb-1 boarder-white sm:text-[30px]">{link.label}</p>
              </Link>
            );
            
          })}
          {/* close icon */}
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 '></CgClose>
      </div>
      
    </div>
  )
}

export default MobileNav
