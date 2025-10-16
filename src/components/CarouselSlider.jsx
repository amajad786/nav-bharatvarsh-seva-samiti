import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PaymentModal from "./PaymentModal";
import { useNavigate } from "react-router-dom";


const slides = [
  {
    id: 1,
    title: "Empower Education & Skill Development for All",
    stats: [
      { value: "0%", label: "Platform Fee" },
      { value: "0", label: "Contributors" },
      { value: "0", label: "Fundraisers" },
    ],
    description: "Shiv Sumitra Group Foundation (SSGF) runs free remedial classes, vocational training, and non-formal education programs for underprivileged children, school dropouts, and low-income families across multiple states, ensuring inclusive learning opportunities and skill development to bridge educational gaps and empower future generations with knowledge and employability.",
    button: "Donate Now",
    image:
      "src/assets/images/event1.jpg",
  },
  {
    id: 2,
    title: "Support Community Health & Hygiene",
    stats: [
      { value: "", label: "" },
    ],
    description:
      "The NGO organizes medical camps, HIV/AIDS prevention workshops, Pulse Polio drives, and sanitation initiatives to improve community health, reduce preventable diseases, and promote hygiene awareness in marginalized areas through partnerships with local healthcare providers.",
    button: "Contribute Now",
    subtext: "",
    image:
      "src/assets/images/event4.jpg",
  },
  {
    id: 3,
    title: "Support Peace & Social Harmony",
    stats: [
      { value: "", label: "" },
    ],
    description:
      "Led by Director Mrs. Nidhi Srivastava, SSGF conducts conflict resolution workshops, tolerance programs, and interfaith dialogues to promote social harmony, reduce violence, and foster empathy among youth in conflict-prone areas.",
    button: "Donate Now",
    subtext: "",
    image:
      "src/assets/images/event5.jpg",
  },
];

export default function CarouselSlider() {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-gray-50 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ease-in-out
            ${index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute"}
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} // Swap image position
          `}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-60 md:h-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 h-[320px] lg:h-auto p-2 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 line-clamp-3">
              {slide.title}
            </h2>
            <div className="flex flex-wrap gap-2 lg:gap-4 mb-3">
              {slide.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-md lg:text-lg font-bold text-cyan-600">
                    {stat.value}
                  </p>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">{slide.description}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold "
              onClick={() => navigate('/donate')}
            >
              {slide.button}
            </button>
            {slide.subtext && (
              <p className="mt-3 text-gray-600">{slide.subtext}</p>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && <PaymentModal onClose={() => setIsOpen(false)} />}

    </div>
  );
}
