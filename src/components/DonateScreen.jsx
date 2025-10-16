import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const presetAmounts = [1000, 3500, 7000];
const ACCENT = "#ff3b57";

function formatINR(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DonateScreen() {
  const navigate = useNavigate();
  const handleContinue = () => navigate("/yourdetail");

  const [currency] = useState("INR (₹)");
  const [amount, setAmount] = useState(3500);
  const [customAmount, setCustomAmount] = useState("");
  const [tipOpen, setTipOpen] = useState(false);
  const [tipPercent, setTipPercent] = useState(8);
  const [isIndian, setIsIndian] = useState(true);

  const activeAmount = useMemo(() => {
    const v = Number(customAmount);
    if (!Number.isNaN(v) && v >= 500) return v;
    return amount;
  }, [amount, customAmount]);

  const tipValue = Math.round((activeAmount * tipPercent) / 100);
  const totalDonation = activeAmount + tipValue;

  return (
    <div className="min-h-screen  py-8 w-full bg-gradient-to-b from-white to-cyan-100 text-gray-800">
      <main className="mx-auto w-full max-w-2xl px-6  pb-8 bg-white shadow " >
        {/* Header */}
        <header className="flex items-center gap-3 p-4 border-b border-gray-200">
          <button
            aria-label="Back"
            className="p-2 rounded-xl hover:bg-gray-100 transition"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M15.78 3.72a.75.75 0 0 1 0 1.06L9.56 11l6.22 6.22a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold">Donate</h1>
          <div className="ml-auto">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm hover:bg-gray-100 transition">
              {currency}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 opacity-80"
              >
                <path fillRule="evenodd" d="M12 14.5 6.5 9h11L12 14.5z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Preset Amounts */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {presetAmounts.map((amt) => {
            const isActive = activeAmount === amt && customAmount === "";
            return (
              <button
                key={amt}
                onClick={() => {
                  setAmount(amt);
                  setCustomAmount("");
                }}
                className={[
                  "relative rounded-2xl border px-4 py-5 text-center text-lg font-semibold transition shadow-sm",
                  "border-gray-200 bg-gray-50 hover:bg-gray-100",
                  isActive ? "ring-2" : "",
                ].join(" ")}
                style={
                  isActive
                    ? {
                      borderColor: ACCENT,
                      boxShadow: `0 0 0 2px ${ACCENT} inset`,
                    }
                    : {}
                }
              >
                {isActive && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-xs font-bold text-white"
                    style={{ background: ACCENT }}
                  >
                    Popular
                  </span>
                )}
                ₹{amt.toLocaleString("en-IN")}
              </button>
            );
          })}
        </div>

        {/* Custom amount */}
        <div className="mt-6">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 shadow-sm">
            <span className="text-xl text-gray-500">₹</span>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Other amount - ₹500 or more"
              className="w-full bg-transparent text-base outline-none placeholder:text-gray-400"
              value={customAmount}
              onChange={(e) =>
                setCustomAmount(e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>
          {customAmount !== "" && Number(customAmount) < 500 && (
            <p className="mt-2 text-sm text-red-500">
              Minimum amount is ₹500.
            </p>
          )}
        </div>

        {/* Donation Amount */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-lg text-gray-600">Donation Amount</span>
          <span className="text-lg font-semibold">
            {formatINR(activeAmount)}
          </span>
        </div>

        {/* Tip Row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="relative">
            <button
              onClick={() => setTipOpen((v) => !v)}
              className="flex items-center gap-2 text-lg text-gray-600"
            >
              Give Tip:
              <span className="font-semibold" style={{ color: ACCENT }}>
                {tipPercent}%
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M12 14.5 6.5 9h11L12 14.5z"
                />
              </svg>
            </button>
            {tipOpen && (
              <div className="absolute z-10 mt-2 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                {[0, 5, 8, 10, 12, 15].map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setTipPercent(p);
                      setTipOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition"
                    style={p === tipPercent ? { color: ACCENT } : {}}
                  >
                    {p}%
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-lg font-semibold">{formatINR(tipValue)}</span>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">Total Donation</span>
          <span className="text-2xl font-extrabold">
            {formatINR(totalDonation)}
          </span>
        </div>

        {/* Gift card */}
        <div className="mt-4 flex items-center gap-2">
          <button
            className="text-base underline underline-offset-4 hover:text-gray-800"
            onClick={() => alert("Gift card modal here")}
          >
            Have a gift card?
          </button>
          <button
            aria-label="Info"
            className="rounded-full border border-gray-300 p-1 text-xs text-gray-600"
          >
            i
          </button>
        </div>

        {/* Indian checkbox */}
        <label className="mt-6 flex items-start gap-3 rounded-2xl bg-gray-50 p-4 border border-gray-200 shadow-sm">
          <input
            type="checkbox"
            checked={isIndian}
            onChange={(e) => setIsIndian(e.target.checked)}
            className="mt-1 h-5 w-5 rounded accent-[var(--accent)]"
            style={{ accentColor: ACCENT }}
          />
          <div>
            <p className="text-lg font-semibold">You're an Indian</p>
            <p className="text-gray-500">
              living in India and donating in INR
            </p>
          </div>
        </label>

        {/* Secure note */}
        <div className="mt-4 flex items-center gap-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm3 7V7a3 3 0 1 0-6 0v2h6Z"
              clipRule="evenodd"
            />
          </svg>
          <span>All payments go through a secure gateway</span>
        </div>

        {/* Continue button */}
        <button
          className="mt-6 w-full rounded-2xl px-6 py-4 text-lg font-bold text-white transition shadow-lg"
          style={{ background: ACCENT }}
          onClick={handleContinue}
        >
          Continue →
        </button>
      </main>
      <div className="h-6" />
    </div>
  );
}
