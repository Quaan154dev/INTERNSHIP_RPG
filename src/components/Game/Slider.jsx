import React, { useState, useEffect } from "react";
import img1 from "../../assets/GameImage/img1.jpg";
import img2 from "../../assets/GameImage/img2.jpg";
import img3 from "../../assets/GameImage/img3.jpg";
import img4 from "../../assets/GameImage/img4.jpg";
import { MdKeyboardBackspace } from "react-icons/md";

const data = [
  {
    id: 1,
    image: img2,
    type: "NATURE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  },
  {
    id: 2,
    image: img3,
    type: "PLANT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  },
  {
    id: 3,
    image: img4,
    type: "NATURE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("");

  const nextSlide = () => {
    setDirection("next");
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const handleAnimationEnd = () => {
      slider.classList.remove("next", "prev");
    };
    slider.addEventListener("animationend", handleAnimationEnd);

    return () => {
      slider.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [direction]);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    if (direction) {
      slider.classList.add(direction);
    }
  }, [current, direction]);

  return (
    <div className="slider">
      <div className="list">
        {data.map((item, index) => (
          <div
            className={`item ${index === current ? "active" : ""}`}
            key={index}
          >
            {index === current && (
              <>
                <img src={item.image} alt="" />
                <div className="content">
                  <div className="title">MAGIC SLIDER</div>
                  <div className="type">{item.type}</div>
                  <div className="description">{item.description}</div>
                  <div className="button">
                    <button>SEE MORE</button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <h1>bsh</h1>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={prevSlide}>
          -
        </button>
        <button className="next" onClick={nextSlide}>
          +
        </button>
      </div>
    </div>
  );
};

export default Slider;
