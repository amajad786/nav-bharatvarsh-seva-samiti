import React from "react";

export default function ProgressSection() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      {/* Share Button */}
      <button className="w-full bg-yellow-600 text-white font-semibold py-2 rounded-lg mb-3">
        Spread the word (22)
      </button>

      <p className="text-sm text-gray-600 text-center mb-4">
        Every Social media share can bring <span className="text-cyan-600 font-bold">₹5000</span>
      </p>

      {/* Progress Numbers */}
      <h2 className="text-3xl font-bold text-gray-900">₹ 31,94,515</h2>
      <p className="text-gray-600 mb-2">raised of ₹ 40,00,000 goal</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full mb-4">
        <div className="bg-yellow-500 h-3 rounded-full w-[80%]"></div>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-gray-700 font-medium">
        <p>3905 supporters</p>
        <p>18 Days left</p>
      </div>
    </div>
  );
}
