import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
       "A small act of kindness, a big reason to smile – let’s come together to fill plates for the needy.
      </h1>
      <ImageCarousel />
    </div>
  );
}
