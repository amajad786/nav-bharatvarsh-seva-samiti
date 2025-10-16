import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const stories = [
  {
    img: "src/assets/st1.avif",
    title: "You are the reason Suraj gets to live his dream",
    text: "“Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” –Dhanasar...",
  },
  {
    img: 'src/assets/st1.avif',
    title: "How donations helped Anika fight her battle",
    text: "Anika's parents were struggling to arrange funds for her surgery. With the support of donors, she received treatment and is now healthy and happy.",
  },
  {
    img: "src/assets/st1.avif",
    title: "A community came together to help Ramesh",
    text: "Ramesh's surgery was made possible through the kindness of strangers. Today, he is back to living a normal life.",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <ChevronLeft className="text-cyan-500 w-6 h-6" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <ChevronRight className="text-teal-500 w-6 h-6" />
  </button>
);

const SuccessStories = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: { arrows: false, dots: true },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center py-6 px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Success Stories
      </h2>

      <div className="relative w-full max-w-7xl">
        <Slider {...settings}>
          {stories.map((story, idx) => (
            <div key={idx} className="px-0 md:px-4">
              <div className="bg-white shadow-md rounded-xl flex flex-col md:flex-row overflow-hidden">
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full  object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-4">{story.text}</p>
                    <a href="#" className="text-cyan-500 font-medium">
                      Read more
                    </a>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 text-sm">
                      Subscribe to read such inspiring stories
                    </span>
                    <button className="flex items-center border border-green-500 text-green-500 px-4 py-1 rounded-full hover:bg-green-50">
                      <MessageCircle className="w-4 h-4 mr-2" /> Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessStories;
