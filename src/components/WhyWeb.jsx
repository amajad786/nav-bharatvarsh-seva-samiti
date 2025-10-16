import React from "react";
import { Handshake, Users, Settings, CreditCard, HelpCircle, Monitor, Wallet, Globe2 } from "lucide-react";

const features = [
  {
    icon: <Handshake className="w-10 h-10 text-cyan-500" />,
    title: "Industry’s best fundraising success rate",
  },
  {
    icon: <Users className="w-10 h-10 text-cyan-500" />,
    title: "Supported By 55,00,000+ Contributors",
  },
  {
    icon: <Settings className="w-10 h-10 text-cyan-500" />,
    title: "Easy-To-Manage Tools To Boost Results",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-cyan-500" />,
    title: "Receive contributions via all popular payment modes",
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-cyan-500" />,
    title: "Get Expert Support 24/7",
  },
  {
    icon: <Monitor className="w-10 h-10 text-cyan-500" />,
    title: "A Dedicated Smart-Dashboard",
  },
  {
    icon: <Wallet className="w-10 h-10 text-cyan-500" />,
    title: "Withdraw Funds Without Hassle",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-cyan-500" />,
    title: "International Payment Support",
  },
];

const WhyWeb = () => {
  return (
    <section className="py-6 max-w-7xl mx-auto px-2">
      <h2 className="text-3xl font-bold text-center mb-10">Why Shiv Sumitra Group Foundation?</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3 rounded-lg shadow-md p-4"
          >
            {feature.icon}
            <div className="w-12 border-b-4 border-yellow-400"></div>
            <p className="text-gray-700">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWeb;
