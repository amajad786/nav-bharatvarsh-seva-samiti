import React from "react";

export default function SupportersList() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">3905 Supporters</h3>

      {/* Supporter Example */}
      <div className="space-y-3">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <p className="text-gray-700">Supporter {s}</p>
            </div>
            <p className="text-teal-600 font-medium">₹1000</p>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-center my-4 text-sm">
        See those who are creating a huge impact and saving lives one contribution at a time!
      </p>

      <button className="w-full bg-yellow-600 text-white py-2 rounded-lg">
        View supporters →
      </button>
    </div>
  );
}
