import React from "react";
import Slider from "react-slick";
import { Heart, Clock, ChevronLeft, ChevronRight, } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fundraisers = [
  {
    id: 1,
    image: "src/assets/images/event1.jpg", // Replace with actual image
    title: "Education Awareness",
    author: "Alok Ramayan Chaurasia",
    raised: 3180697,
    goal: 4000000,
    daysLeft: 20,
    supporters: 3883,
  },
  {
    id: 2,
    image: "src/assets/images/event2.jpg",
    title: "Food Distribution",
    author: "Anurag Srivastava",
    raised: 2757424,
    goal: 3000000,
    daysLeft: 12,
    supporters: 1333,
  },
  {
    id: 3,
    image: "src/assets/images/event3.jpg",
    title: "Health Camp",
    author: "Rhea Rai",
    raised: 2181116,
    goal: 2500000,
    daysLeft: 50,
    supporters: 1214,
  },
  {
    id: 4,
    image: "src/assets/images/event1.jpg",
    title: "Education Awareness",
    author: "John Doe",
    raised: 1500000,
    goal: 2000000,
    daysLeft: 15,
    supporters: 890,
  },
  {
    id: 5,
    image: "src/assets/images/event2.jpg",
    title: "Food Distribution",
    author: "Rhea Rai",
    raised: 2181116,
    goal: 2500000,
    daysLeft: 50,
    supporters: 1214,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <ChevronLeft className="text-yellow-500 w-6 h-6" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <ChevronRight className="text-yellow-500 w-6 h-6" />
  </button>
);

export default function FundraiserCarousel() {

  const navigate = useNavigate();


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4, // Desktop default
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">
          Our Contribution
        </h2>
        <p className="text-center text-gray-500 mb-6">
          View the fundraisers that are most active right now
        </p>

        <Slider {...settings}>
          {fundraisers.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden border-[1px] h-[410px] border-gray-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    by {item.author}
                  </p>
                  <p className="text-lg font-bold">
                    ₹{item.raised.toLocaleString("en-IN")}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      raised out of ₹{item.goal.toLocaleString("en-IN")}
                    </span>
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 my-2">
                    <div
                      className="bg-yellow-500 h-1.5 rounded-full"
                      style={{
                        width: `${(item.raised / item.goal) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-600 mt-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {item.daysLeft} Days Left
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />{" "}
                      {item.supporters} Supporters
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button className="cursor-pointer w-1/2 border rounded px-2 py-1 text-sm font-medium hover:bg-gray-100">
                      Share
                    </button>
                    <button onClick={() => navigate('/fundraiser')} className="cursor-pointer w-1/2 bg-yellow-500 text-white rounded px-2 py-1 text-sm font-medium hover:bg-yellow-600">
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View More */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-yellow-500 font-medium hover:underline inline-flex items-center gap-1"
          >
            View More →
          </a>
        </div>
      </div>
    </div>
  );
}
