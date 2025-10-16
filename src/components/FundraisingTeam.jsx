import React from "react";
import { Plus } from "lucide-react";

export default function FundraisingTeam() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Fundraising Team</h3>
      <button className="flex items-center gap-2 text-cyan-600 font-medium">
        <Plus className="w-5 h-5" /> Start a Supporting Fundraiser
      </button>
    </div>
  );
}
