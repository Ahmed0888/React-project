// import React from "react";
// import PriceCard from "./PriceCard";

// const Price = () => {
//   return (
//     <div className="pt-16 pb-16 bg-[#edfbff]">
//       <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
//         Meet Exciting pricing plans
//       </h2>
//       <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Price Cards will go here */}
//         <div 
//         data-aos='fade-up' data-aos-anchor-placement='top-center' >
//           <PriceCard price={15} plan="starter" />
//         </div>
//         <div
//         data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='100'>
//           <PriceCard price={45} plan="Bussiness" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Price;


import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  const plans = [
    {
      plan: "Starter",
      price: 15,
      highlight: false,
      features: [
        { label: "Unlimited Connections" },
        { label: "Basic Actions & Triggers" },
        { label: "Draft Payments" },
        { label: "Unlimited Flows & Support" },
        { label: "Lifetime Updates" },
      ],
    },
    {
      plan: "Business",
      price: 45,
      highlight: true,
      features: [
        { label: "Unlimited Connections" },
        { label: "Premium Actions & Triggers" },
        { label: "Faster Workflow Automation" },
        { label: "Priority Support" },
        { label: "All Future Updates" },
      ],
    },
    {
      plan: "Business",
      price: 45,
      highlight: true,
      features: [
        { label: "Unlimited Connections" },
        { label: "Premium Actions & Triggers" },
        { label: "Faster Workflow Automation" },
        { label: "Priority Support" },
        { label: "All Future Updates" },
      ],
    },
    {
      plan: "Business",
      price: 45,
      // highlight: true,
      features: [
        { label: "Unlimited Connections" },
        { label: "Premium Actions & Triggers" },
        { label: "Faster Workflow Automation" },
        { label: "Priority Support" },
        { label: "All Future Updates" },
      ],
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-[#edfbff]">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Meet Exciting Pricing Plans
      </h2>

      <div className="w-[90%] md:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {plans.map((p, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 150}
          >
            <PriceCard
              price={p.price}
              plan={p.plan}
              features={p.features}
              highlight={p.highlight}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
