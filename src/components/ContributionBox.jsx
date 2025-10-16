import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
import { useNavigate } from "react-router-dom";

export default function ContributionBox() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const raised = 3194515;
    const goal = 4000000;
    const percent = (raised / goal) * 100;

    return (
        <div className="p-5 w-full">
            {/* Contribution Button */}
            <button
                className="w-full bg-yellow-500 text-white py-2 rounded font-bold hover:bg-yellow-600"
                // onClick={() => setIsOpen(true)}
                onClick={() => navigate('/donate')}
            >
                CONTRIBUTE NOW
            </button>

            {/* Raised Info */}
            <div className="mt-4">
                <div className="text-lg font-semibold">
                    ₹ {raised.toLocaleString()} raised
                </div>
                <div className="text-gray-500">of ₹ {goal.toLocaleString()} goal</div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                    className="bg-yellow-500 h-3 rounded-full"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>

            {/* Supporters and Days */}
            <div className="flex justify-between mt-4 text-gray-600">
                <span>3905 supporters</span>
                <span>18 days left</span>
            </div>

            {/* Payment Modal */}
            {isOpen && <PaymentModal onClose={() => setIsOpen(false)} />}
        </div>
    );
}
