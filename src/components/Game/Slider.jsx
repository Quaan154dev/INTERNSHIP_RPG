import React, { useState } from "react";
import anh1 from "../../assets/GameImage/img1.jpg";
import anh2 from "../../assets/GameImage/img2.jpg";
import anh3 from "../../assets/GameImage/img3.jpg";
import anh4 from "../../assets/GameImage/img4.jpg";
import { useTheme } from "../../ThemeContext";

const Slider = () => {
  const { season, setSeason } = useTheme();
  const [slides, setSlides] = useState([
    {
      img: anh1,
      title: "Slide 0100000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur .",
    },
    {
      img: anh2,
      title: "Slide 02",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur .",
    },
    {
      img: anh3,
      title: "Slide 03",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur .",
    },
  ]);

  const nextSlide = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides.push(newSlides.shift());
      return newSlides;
    });
  };

  const prevSlide = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides.unshift(newSlides.pop());
      return newSlides;
    });
  };

  return (
    <div className={`containers ${season}-gradient `}>
      <div className="slidered">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slides"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="contented">
              <h2 className="text-red-400 text-xs">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <div className="px-4 py-2 grid-cols-2 bg-gray-200 rounded-3xl">
              <button className="border-none text-xl  text-black font-poppins font-medium cursor-pointer transition duration-400 tracking-wider">
                SEE MORE
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={prevSlide}></span>
        <span className="next" onClick={nextSlide}></span>
      </div>
    </div>
  );
};

export default Slider;
