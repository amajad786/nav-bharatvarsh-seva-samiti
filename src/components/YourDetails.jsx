import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ACCENT = "#ff3b57";

export default function YourDetails() {
  const [fullName, setFullName] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const totalPay = 3780;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full py-8 bg-gradient-to-b from-white to-cyan-100 flex flex-col">
      {/* Main Form Centered */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
          {/* Header */}
          <header className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
            {/* Back Button */}
            <button
              aria-label="Back"
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => navigate("/donate")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M15.78 3.72a.75.75 0 0 1 0 1.06L9.56 11l6.22 6.22a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">Your Details</h1>
          </header>

          {/* Full Name */}
          <label className="block mt-4">
            <span className="text-sm font-medium text-gray-700">
              Full Name<span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="eg. Raghu Kumar"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[var(--accent)]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          {/* Donate anonymously */}
          <div className="mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="h-5 w-5 rounded accent-[var(--accent)]"
              style={{ accentColor: ACCENT }}
            />
            <span className="text-gray-700">Donate anonymously</span>
          </div>

          {/* Mobile Number */}
          <label className="block mt-6">
            <span className="text-sm font-medium text-gray-700">
              Mobile Number<span className="text-red-500">*</span>
            </span>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3">
              <span className="flex items-center gap-1 text-gray-600">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="IN"
                  className="w-5 h-5 rounded-sm"
                />
                <span>+91</span>
              </span>
              <input
                type="tel"
                placeholder="9876543210"
                className="w-full bg-transparent outline-none placeholder:text-gray-400"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Payment updates will be sent on this number
            </p>
          </label>

          {/* Email */}
          <label className="block mt-6">
            <span className="text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              placeholder="eg: raghukumar@gmail.com"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[var(--accent)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Billing Address */}
          <label className="block mt-6">
            <span className="text-sm font-medium text-gray-700">
              Billing Address<span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="eg: 24, Ganesha Layout, Bengaluru"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[var(--accent)]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          {/* Pincode */}
          <label className="block mt-6">
            <span className="text-sm font-medium text-gray-700">
              Pincode<span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="eg: 560001"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[var(--accent)]"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </label>

          {/* Terms */}
          <p className="mt-6 text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <span className="underline text-blue-600 cursor-pointer">
              terms & conditions
            </span>
          </p>

          {/* Continue Button */}
          <button
            className="mt-6 w-full rounded-xl px-6 py-4 text-lg font-bold text-white shadow-md hover:shadow-lg transition-all duration-300"
            style={{ background: ACCENT }}
            onClick={() => navigate("/donate/payment")}
          >
            Continue to pay ₹{totalPay.toLocaleString("en-IN")}
          </button>
        </div>
      </main>
    </div>
  );
}
