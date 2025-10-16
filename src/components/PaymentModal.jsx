import React, { useState } from "react";

export default function PaymentModal({ onClose }) {
    const [amount, setAmount] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const suggestedAmounts = [1000, 2000, 5000, 10000];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 bg-white/50 bg-opacity-50 flex items-center justify-center z-50 px-2">
            <div className="bg-white rounded-xl  shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Heading */}
                <div className="flex items-center gap-2 p-2">
                    <img src="src/assets/images/SSGF logo.jpeg"  alt="" className=" w-18"/>

                <h2 className="text-2xl font-bold text-center mb-4 text-yellow-600">
                    Shiv Shmitra Foundation
                </h2>
                </div>
                

                {submitted ? (
                    <div className="text-center py-6">
                        <h3 className="text-lg font-semibold text-green-600">
                            ✅ Thank you for your contribution!
                        </h3>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Suggested Amounts */}
                        <div className="flex flex-wrap gap-2 justify-center mb-3">
                            {suggestedAmounts.map((amt) => (
                                <button
                                    type="button"
                                    key={amt}
                                    onClick={() => setAmount(amt)}
                                    className={`px-4 py-2 border rounded-full text-sm transition ${amount === amt
                                            ? "bg-yellow-500 text-white"
                                            : "bg-gray-100 hover:bg-yellow-100"
                                        }`}
                                >
                                    ₹{amt.toLocaleString()}
                                </button>
                            ))}
                        </div>

                        {/* Form Fields */}
                        {[
                            { type: "text", placeholder: "Full Name" },
                            { type: "tel", placeholder: "Mobile" },
                            { type: "email", placeholder: "Email" },
                            { type: "text", placeholder: "Address" },
                            { type: "text", placeholder: "Pincode" },
                            { type: "text", placeholder: "PAN Card Number" },
                        ].map((field, idx) => (
                            <input
                                key={idx}
                                {...field}
                                required
                                className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            />
                        ))}

                        <input
                            type="number"
                            placeholder="Amount (₹)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2.5 rounded-lg font-semibold hover:bg-yellow-600 transition text-sm"
                        >
                            💳 Pay Now
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
