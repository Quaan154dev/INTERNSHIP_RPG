import React, { useState } from "react";
import anh1 from "../../assets/GameImage/img1.jpg";
import anh2 from "../../assets/GameImage/img2.jpg";
import anh3 from "../../assets/GameImage/img3.jpg";
import anh4 from "../../assets/GameImage/img4.jpg";
import { useTheme } from "../../ThemeContext";
import { Link } from "react-router-dom";

const Slider = () => {
  const { season, setSeason } = useTheme();
  const [slides, setSlides] = useState([
    {
      img: anh1,
      title: "Word game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur .",
      link: "/wordgame",
    },
    {
      img: anh2,
      title: "Sad story",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur .",
      link: "/sadstory",
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
            className="slides justify-center items-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div
              className={`${
                index === 0 ? "contented opacity-100" : "contented opacity-0"
              }`}
            >
              <h2 className="text-red-400 text-xs">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <Link to={slide.link}>
              <div
                className=" py-1  grid-cols-2 bg-gray-200 rounded"
                style={{ marginBottom: "10px" }}
              >
                <button className="border-none text-md  mb-2 text-black font-poppins font-medium cursor-pointer transition duration-400 tracking-wider pl-2">
                  <p className=""> SEE MORE</p>
                </button>
              </div>
            </Link>
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
