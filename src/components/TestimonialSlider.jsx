import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Jessica Devis",
    username: "@jessicadevis",
    image: "src/assets/st1.avif",
    text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.",
    emoji: "🦄",
  },
  {
    name: "Mary Joshiash",
    username: "@maryjoshiash",
    image: "src/assets/st1.avif",
    text: "It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.",
    emoji: "",
  },
  {
    name: "Marcell Glock",
    username: "@MarcellGlock",
    image: "src/assets/st1.avif",
    text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.",
    emoji: "😍",
  },
   {
    name: "Marcell Glock",
    username: "@MarcellGlock",
    image: "src/assets/st1.avif",
    text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.",
    emoji: "😍",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-2 py-12 overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Success Stories
      </h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-0 md:px-4 mb-6">
            <div key={index} className="bg-white shadow rounded-2xl p-6 flex flex-col gap-4 h-60">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-cyan-600 flex items-center gap-1">
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#1DA1F2"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-cyan-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L9 15l-3.75-3.75"
                      />
                    </svg>
                  </h3>
                  <p className="text-sm text-gray-500">{item.username}</p>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-3">{item.text}</p>
              {item.emoji && (
                <span className="text-2xl" role="img" aria-label="emoji">
                  {item.emoji}
                </span>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
