import React from "react";

export default function SuggestedFundraisers() {
  const fundraisers = [
    { id: 1, title: "Help Ramesh to provide Free Eduction", img: "https://via.placeholder.com/300x200" },
    { id: 2, title: "Support Priya’s  to Provide Cloths to the little Ones ", img: "https://via.placeholder.com/300x200" },
  
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        People Like You Contributed To
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {fundraisers.map((f) => (
          <div key={f.id} className="shadow rounded-md overflow-hidden">
            <img src={f.img} alt={f.title} className="w-full h-32 object-cover" />
            <p className="p-2 font-semibold text-gray-800">{f.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
