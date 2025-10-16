import React from "react";

export default function CampaignerInfo() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Campaigner</h3>
        <button className="text-cyan-600 font-medium">Contact</button>
      </div>

      {/* Campaigner */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 font-bold">
          A
        </div>
        <div>
          <p className="font-semibold">Mr Alok</p>
          <p className="text-gray-500 text-sm">Gorakhpur</p>
        </div>
      </div>

      {/* Beneficiary */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 font-bold">
          SSG
        </div>
        <div>
          <p className="text-cyan-600 font-semibold">Shiv Sumitra Group Foundations</p>
          <p className="text-gray-500 text-sm">Delhi</p>
        </div>
      </div>
    </div>
  );
}
