// import React from 'react'
// import WhyChooseCard from './WhyChooseCard'

// const WhyChoose = () => {
//   return (
//     <div className='pt-16 pb-16 '>
//         <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center '>Why you choose this application</h1>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-14 w-[90%] md:w-[80%] mx-auto mt-20 lg:grid-cols-3 xl:grid-cols-4'>
//             <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='100'>
//                 <WhyChooseCard image="/images/i1.png" title= "Create Free Account"
//                 linkText="Start Earning" />
//             </div>
//             <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='200'>
//                 <WhyChooseCard image="/images/i2.png" title= "Monitor User Analytics" 
//                 linkText="Signup Your Store" />
//             </div>
//             <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='300'>
//                 <WhyChooseCard image="/images/i3.png" title= "Safe &Trusted "
//                 linkText="Get Thr App" />
//             </div>
//             <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='400'>
//                 <WhyChooseCard image="/images/i4.png" title= "Fast Customer Support"
//                 linkText="Learn More" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default WhyChoose



import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {

  const features = [
    {
      image: "/images/i1.png",
      title: "Create Free Account",
      linkText: "Start Earning",
      delay: "100",
    },
    {
      image: "/images/i2.png",
      title: "Monitor User Analytics",
      linkText: "Signup Your Store",
      delay: "200",
    },
    {
      image: "/images/i3.png",
      title: "Safe & Trusted",
      linkText: "Get The App",
      delay: "300",
    },
    {
      image: "/images/i4.png",
      title: "Fast Customer Support",
      linkText: "Learn More",
      delay: "400",
    },
  ];

  return (
    <div className='pt-16 pb-16'>
      <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
        Why you choose this application
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-14 w-[90%] md:w-[80%] mx-auto mt-20 lg:grid-cols-3 xl:grid-cols-4'>
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={item.delay}
          >
            <WhyChooseCard 
              image={item.image}
              title={item.title}
              linkText={item.linkText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
