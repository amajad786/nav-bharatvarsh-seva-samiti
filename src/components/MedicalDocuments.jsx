import React from "react";

export default function MedicalDocuments() {
  return (
    <div className="bg-white rounded-lg shadow p-5 mt-6">
      <h2 className="text-xl font-bold mb-4">Medical Documents</h2>
      <p className="text-gray-700 mb-3">
        Upload or view documents to learn about how your contributions are used.
      </p>
      
      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
        View Medical Documents
      </button>
    </div>
  );
}
