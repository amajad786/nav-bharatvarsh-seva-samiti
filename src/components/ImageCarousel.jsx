import React from "react";
import Slider from "react-slick";

export default function ImageCarousel() {
    const images = [
        "src/assets/images/event2.jpg",
        "src/assets/images/event6.jpg",
    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className="h-100">
                        <img src={img} alt={`Slide ${idx}`} className="w-full object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
