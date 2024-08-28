import React, { useState } from "react";
import boyImage from "../../assets/sadstory/boy.png";
import girlImage from "../../assets/sadstory/girl.png";
import sadBoyImage from "../../assets/sadstory/sadboy.png";
import flowerImage from "../../assets/sadstory/flower.png";
import gameImage from "../../assets/sadstory/gameImage.png";
import { useTheme } from "../../ThemeContext";
//
export default function Scene() {
  const [boySrc, setBoySrc] = useState(boyImage);
  const [flowerStyles, setFlowerStyles] = useState("opacity-0 left-[-20%]");
  const [chatBoxOpacity, setChatBoxOpacity] = useState("opacity-0");
  const [chatBox2Opacity, setChatBox2Opacity] = useState("opacity-0");
  const [chatBox3Opacity, setChatBox3Opacity] = useState("opacity-0");
  const [girlRight, setGirlRight] = useState("right-[-100%]");
  const [boyLeft, setBoyLeft] = useState("left-[10%]");
  const [boyOpacity, setBoyOpacity] = useState("opacity-100");
  const [storyText, setStoryText] = useState(
    "Quân là sinh viên năm 3 học IT..."
  );
  const [gameImageOpacity, setGameImageOpacity] = useState("opacity-0");
  const [step, setStep] = useState(0);

  const handleSkip = () => {
    window.location.href = "/trailer";
  };

  const handleNext = () => {
    switch (step) {
      case 0:
        setStoryText("Một ngày nọ Quân gặp một bạn nữ sinh đẹp...");
        break;
      case 1:
        setGirlRight("right-[30%]");
        break;
      case 2:
        setBoyLeft("left-[30%]");
        setStoryText(
          "Sau một thời gian, Quân sử dụng khả năng tìm kiếm của một developer..."
        );
        break;
      case 3:
        setStoryText(
          "Quân đã tìm được thông tin của bạn nữ và biết bạn đang học chuyên ngành Brse Hàn Quốc..."
        );
        break;
      case 4:
        setStoryText("Quân đã lấy hết can đảm để tỏ tình...");
        setChatBoxOpacity("opacity-100");
        setFlowerStyles("left-[55%] bottom-[20%] opacity-100");
        break;
      case 5:
        setChatBoxOpacity("opacity-0");
        setChatBox2Opacity("opacity-100");
        setStoryText("Cô gái nói...");
        break;
      case 6:
        setChatBox2Opacity("opacity-0");
        setChatBox3Opacity("opacity-100");
        break;
      case 7:
        setGirlRight("right-[-100%]");
        setChatBox3Opacity("opacity-0");
        setFlowerStyles("left-[55%] bottom-[10%] opacity-0");
        setStoryText("Quân nghe xong buồn và quyết tâm sẽ master tiếng Hàn...");
        setBoySrc(sadBoyImage);
        break;
      case 8:
        setStoryText(
          "Quân quyết tâm sẽ master tiếng Hàn và hiểu văn hóa của Hàn Quốc thông qua game của Quân tự code..."
        );
        setBoyLeft("left-[100%]");
        setBoyOpacity("opacity-0");
        setGameImageOpacity("opacity-100");
        break;
      case 9:
        window.location.href = "/trailer";
        break;
      default:
        break;
    }
    setStep(step + 1);
  };
  const { season } = useTheme();
  return (
    <div
      className={` ${season}-gradient relative w-full h-full overflow-hidden  `}
    >
      <div className="fixed top-0 left-0 w-full p-4 bg-white/70 backdrop-blur-md flex justify-between items-center">
        <div>{storyText}</div>
        <div>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white p-2 rounded mr-2"
          >
            Next
          </button>
          <button
            onClick={handleSkip}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Skip
          </button>
        </div>
      </div>
      <img
        src={boySrc}
        alt="Boy"
        className={`absolute bottom-[10%] transition-all duration-2000 ${boyLeft} ${boyOpacity} w-[15%]`}
      />
      <img
        src={girlImage}
        alt="Girl"
        className={`absolute bottom-[10%] transition-all duration-2000 ${girlRight} w-[15%]`}
      />
      <img
        src={flowerImage}
        alt="Flower"
        className={`absolute transition-all duration-2000 ${flowerStyles} w-[10%]`}
      />
      <div
        className={`absolute bottom-[50%] left-[45%] bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBoxOpacity}`}
      >
        Cậu đồng ý làm ny tớ nhé?
      </div>
      <div
        className={`absolute bottom-[50%] left-[45%] bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBox2Opacity}`}
      >
        Cậu rất tốt nhưng tiếng Hàn cậu kém...
      </div>
      <div
        className={`absolute bottom-[50%] left-[45%] bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBox3Opacity}`}
      >
        Khi nào cậu master tiếng Hàn thì hãy nghĩ đến chuyện này...
      </div>
      <img
        src={gameImage}
        alt="Game"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-2000 ${gameImageOpacity} w-[80%]`}
      />
    </div>
  );
}
