import React from "react";

export default function Comments() {
  const comments = [
    { name: "Ravi Kumar", msg: "Prayers for speedy recovery 🙏" },
    { name: "Anjali Singh", msg: "Stay strong! Sending love ❤️" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">Supporters Comments</h2>
      <div className="space-y-4">
        {comments.map((c, i) => (
          <div key={i} className="border-b pb-2">
            <p className="font-semibold text-gray-800">{c.name}</p>
            <p className="text-gray-600">{c.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
