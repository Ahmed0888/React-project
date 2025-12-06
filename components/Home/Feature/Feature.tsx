{// import React from "react";
// import {
//   FaBook,
//   FaCog,
//   FaDesktop,
//   FaHeadset,
//   FaInfinity,
//   FaLaptop,
//   FaLayerGroup,
//   FaMobileAlt,
//   FaShieldAlt,
// } from "react-icons/fa";

// const Feature = () => {
//   const features = [
//     {
//       icon: <FaLayerGroup className="text-red-500 " />,
//       text: "50+ Uniique",
//     },
//     {
//       icon: <FaLaptop className="text-blue-500 " />,
//       text: "Multiple ",
//     },
//     {
//       icon: <FaMobileAlt className="text-yellow-500 " />,
//       text: "Mobile device ",
//     },
//     {
//       icon: <FaDesktop className="text-purple-500 " />,
//       text: "Mobile device ",
//     },
//     {
//       icon: <FaCog className="text-green-500 " />,
//       text: "Mobile device ",
//     },
//     {
//       icon: <FaInfinity className="text-pink-500 " />,
//       text: "Lifetime Updates",
//     },
//     {
//       icon: <FaBook className="text-indigo-500 " />,
//       text: "Lifetime Updates",
//     },
//     {
//       icon: <FaShieldAlt className="text-orange-500 " />,
//       text: "Enhanced Security",
//     },
//   ];

//   return (
//     <div className="bg-pink-50 pt-20 pb-20">
//       <div className="w-[80%] mx-auto text-center ">
//         <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
//           Its Everything you will Ever Need
//         </h1>
//         <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
//             >
//               <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center rounded-full mb-3">
//                 <span>{feature.icon}</span>
//                 <span className="font-semibold text-gray-700">
//                   {feature.text}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature;
}

import React from "react";
import {
  FaBook,
  FaCog,
  FaDesktop,
  FaHeadset,
  FaInfinity,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Feature = ()=> {
  const features = [
    { icon: <FaLayerGroup className="text-red-500 text-2xl" />, text: "50+ Unique Design Blocks" },
    { icon: <FaLaptop className="text-blue-500 text-2xl" />, text: "Multiple Layouts" },
    { icon: <FaMobileAlt className="text-yellow-500 text-2xl" />, text: "Mobile First Design" },
    { icon: <FaDesktop className="text-purple-500 text-2xl" />, text: "Fully Responsive" },
    { icon: <FaCog className="text-green-500 text-2xl" />, text: "Customizable Features" },
    { icon: <FaHeadset className="text-emerald-500 text-2xl" />, text: "Humanly Support" },
    { icon: <FaInfinity className="text-pink-500 text-2xl" />, text: "Lifetime Updates" },
    { icon: <FaBook className="text-indigo-500 text-2xl" />, text: "Rich Documentation" },
    { icon: <FaShieldAlt className="text-orange-500 text-2xl" />, text: "Enhanced Security" },
  ];

  return (
    // <div className="bg-pink-50 py-20">
    //   <div className="w-[85%] mx-auto text-center">
    //     <h1 className="text-2xl md:text-3xl font-bold capitalize">
    //       It’s Everything You Will Ever Need
    //     </h1>

    //     <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {features.map((feature, index) => (
    //         <div
    //           key={index}
    //           className="flex items-center bg-white rounded-xl shadow-md px-5 py-4 text-left transition hover:shadow-lg"
    //         >
    //           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mr-4">
    //             {feature.icon}
    //           </div>
    //           <h3 className="font-semibold text-gray-800 text-base">
    //             {feature.text}
    //           </h3>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-pink-50 pt-20 pb-20">
    <div className="w-[80%] mx-auto text-center">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        It’s Everything You Will Ever Need
      </h1>

      <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature,index) => (
          <div 
            data-aos='flip-right' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`}
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3 hover:shadow-lg transition duration-300"
            >
            <div className="text-3xl w-14 h-14 bg-gray-100 flex items-center justify-center rounded-full">
              <span>{feature.icon}</span>
            </div>
            <span className="font-semibold text-gray-800">{feature.text}</span>
          </div>
          ))
        }
        </div>
        </div>
      </div>
    
  );
};

export default Feature;
