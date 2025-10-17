import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";

const categories = [
  "All",
  "Education",
  "Environment",
  "Human Right",
  "Water",
  "Health",
];

const mediaItems = [
  { id: 1, category: "Health", type: "image", src: "src/assets/images/health.jpg" },
  { id: 2, category: "Health", type: "image", src: "src/assets/images/health2.jpg" },
  { id: 3, category: "Health", type: "image", src: "src/assets/images/health3.jpg" },
  { id: 4, category: "Education", type: "video", src: "src/assets/videos/ngo2.mp4" },
  { id: 5, category: "Environment", type: "image", src: "src/assets/images/ngo1.jpg" },
  { id: 6, category: "Human Right", type: "image", src: "src/assets/images/ngo1.jpg" },
  { id: 7, category: "Human Right", type: "video", src: "src/assets/videos/ngo1.mp4" },
  { id: 8, category: "Water", type: "image", src: "src/assets/images/ngo1.jpg" },
  { id: 9, category: "Water", type: "video", src: "src/assets/videos/ngo3.mp4" },
  { id: 10, category: "Education", type: "image", src: "src/assets/images/ngo1.jpg" },
];

const ITEMS_PER_PAGE = 6;

const GalleryCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
   const videoRef = useRef(null);

  const filteredItems =
    selectedCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goPrev = () => {
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  const goNext = () => {
    setSelectedIndex((prev) =>
      prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

//   const handleClick = (e) => {
//     // क्लिक से pause/play टॉगल को रोकना
//     e.preventDefault();
//     e.stopPropagation();
//   };

  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition ${
              selectedCategory === cat
                ? "bg-yellow-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ImageIcon size={16} />
            {cat}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedItems.map((item, idx) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg cursor-pointer"
            onClick={() => openModal((currentPage - 1) * ITEMS_PER_PAGE + idx)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <video
                ref={videoRef}
                src={item.src}
                className="w-full h-56 object-cover"
                muted
                loop
                autoPlay
              />
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 border rounded disabled:opacity-50 hover:bg-gray-200"
        >
          <ChevronLeft size={18} />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-yellow-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 border rounded disabled:opacity-50 hover:bg-gray-200 "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Modal for Viewing Media */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-yellow-500 p-1 rounded-full shadow hover:bg-yellow-600 z-50"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow hover:bg-yellow-600 z-50"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow hover:bg-yellow-600 z-50"
            >
              <ChevronRight size={20} />
            </button>

            {/* Media Display */}
            {filteredItems[selectedIndex].type === "image" ? (
              <img
                src={filteredItems[selectedIndex].src}
                alt="Full Size"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={filteredItems[selectedIndex].src}
                controls
                autoPlay
                className="w-full max-h-[90vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
