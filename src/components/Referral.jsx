import React from "react";

export default function Referral() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-3">Refer a Friend</h2>
      <p className="text-gray-700 mb-4">
        Share this fundraiser with your friends and family to help us reach the
        goal faster.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
        SHARE NOW
      </button>
    </div>
  );
}
