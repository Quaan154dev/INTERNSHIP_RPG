import React, { useState, useEffect, useRef } from "react";
import useInterval from "../hooks/useInterval2";

import springBg from "../assets/Spring/Spring.jpg";
import summerBg from "../assets/Summer/Summer.jpg";
import fallBg from "../assets/Fall/Fall.jpg";
import winterBg from "../assets/winter/Winter.jpg";

import cherryBlossom from "../assets/Spring/cherry-blossom.png";
import kimbap from "../assets/Spring/kimbap.png";
import bikimbap from "../assets/Spring/bibimbap.png";

import fireworks from "../assets/Summer/fireworks.png";
import music from "../assets/Summer/music.png";
import patbingsu from "../assets/Summer/patbingsu.png";

import hanok from "../assets/Fall/hanok.png";
import mapLeaf from "../assets/Fall/maple-leaf.png";
import skyLantern from "../assets/Fall/sky-lantern.png";

import skiing from "../assets/winter/skiing.png";
import soju from "../assets/winter/soju.png";
import tteokbokki from "../assets/winter/tteokbokki.png";

import menu from "../assets/menu.png";

import soundCorrectEffect from "../assets/mp3/correctAnswer.mp3";
import soundWrongEffect from "../assets/mp3/wrongAnswer.mp3";
import soundBackgroundEffect from "../assets/mp3/gameBackground.mp3";
import soundNextLevelEffect from "../assets/mp3/nextLevel.mp3";
import soundFailureEffect from "../assets/mp3/failure.mp3";

import { Howl } from "howler";
import { StarsCanvas } from "./canvas";
import { useTheme } from "../ThemeContext";

const Game = () => {
  const canvasRef = useRef(null);
  const containLetterRef = useRef(null);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const [balls, setBalls] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isOnSupport, setIsOnSupport] = useState(false);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [backgroundMusic, setBackgroundMusic] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const { season, setSeason } = useTheme();

  const backgrounds = [springBg, summerBg, fallBg, winterBg];
  const outsidebackgrounds = ["spring", "summer", "fall", "winter"];
  const ballImages = {
    [springBg]: [cherryBlossom, kimbap, bikimbap],
    [summerBg]: [fireworks, music, patbingsu],
    [fallBg]: [hanok, mapLeaf, skyLantern],
    [winterBg]: [skiing, soju, tteokbokki],
  };

  const koreanKeyMap = {
    ㅂ: "Q",
    ㅈ: "W",
    ㄷ: "E",
    ㄱ: "R",
    ㅅ: "T",
    ㅛ: "Y",
    ㅕ: "U",
    ㅑ: "I",
    ㅐ: "O",
    ㅔ: "P",
    ㅁ: "A",
    ㄴ: "S",
    ㅇ: "D",
    ㄹ: "F",
    ㅎ: "G",
    ㅗ: "H",
    ㅓ: "J",
    ㅏ: "K",
    ㅣ: "L",
    ㅋ: "Z",
    ㅌ: "X",
    ㅊ: "C",
    ㅍ: "V",
    ㅠ: "B",
    ㅜ: "N",
    ㅡ: "M",
  };

  const playCorrectSound = () => {
    const correctSound = new Howl({
      src: [soundCorrectEffect],
      volume: 0.2,
      onend: function () {
        console.log("Finished playing the correct sound");
      },
    });
    correctSound.play();
  };

  const playWrongSound = () => {
    const wrongSound = new Howl({
      src: [soundWrongEffect],
      volume: 0.2,
      onend: function () {
        console.log("Finished playing the wrong sound");
      },
    });
    wrongSound.play();
  };

  const playNextLevelSound = () => {
    const NextLevelSound = new Howl({
      src: [soundNextLevelEffect],
      volume: 0.4,
      onend: function () {
        console.log("Finished playing the wrong sound");
      },
    });
    NextLevelSound.play();
  };

  const playFailureSound = () => {
    const FailureSound = new Howl({
      src: [soundFailureEffect],
      volume: 0.4,
      onend: function () {
        console.log("Finished playing the wrong sound");
      },
    });
    FailureSound.play();
  };

  useEffect(() => {
    const backgroundMusic = new Howl({
      src: [soundBackgroundEffect],
      loop: true,
      volume: 0.1, // Set initial volume
    });
    backgroundMusic.play();
    setBackgroundMusic(backgroundMusic);

    return () => {
      // Stop the music when the component unmounts
      backgroundMusic.stop();
    };
  }, []);

  useEffect(() => {
    if (backgroundMusic) {
      if (isPaused) {
        backgroundMusic.pause();
      } else {
        backgroundMusic.play();
      }
    }
  }, [isPaused, backgroundMusic]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawBackground = () => {
      const bg = new Image();
      bg.src = backgrounds[currentBackgroundIndex];
      setSeason(outsidebackgrounds[currentBackgroundIndex]);
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    };

    const drawBalls = () => {
      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.closePath();
        const img = new Image();
        img.src = ball.img;
        ctx.drawImage(
          img,
          ball.x - ball.radius,
          ball.y - ball.radius,
          ball.radius * 2,
          ball.radius * 2
        );
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 5;
        ctx.fillStyle = "#6EFAFF";
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(ball.letter, ball.x, ball.y);
        ctx.fillText(ball.letter, ball.x, ball.y);
      });
    };

    const updateGame = () => {
      if (!isPaused) {
        updateBalls();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        drawBalls();
      }
    };

    const animationId = requestAnimationFrame(updateGame);
    return () => cancelAnimationFrame(animationId);
  });

  const updateBalls = () => {
    setBalls((prevBalls) => {
      const updatedBalls = prevBalls.map((ball) => ({
        ...ball,
        y: ball.y + ball.speed,
      }));

      updatedBalls.forEach((ball) => {
        if (ball.y + ball.radius >= canvasRef.current.height) {
          setHealth((prevHealth) => prevHealth - 10);
          playWrongSound();
          if (health <= 0) {
            setIsPaused(true);
            setIsEnd(true);
            playFailureSound();
          }
          removeLetterFromList(ball.letter);
        }
      });

      return updatedBalls.filter(
        (ball) => ball.y < canvasRef.current.height - ball.radius
      );
    });
  };

  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    setBalls((prevBalls) =>
      prevBalls.filter((ball) => {
        if (koreanKeyMap[ball.letter] === key || ball.letter === key) {
          setScore((prevScore) => {
            const newScore = prevScore + 10;
            playCorrectSound();
            if (newScore % 40 === 0) {
              playNextLevelSound();
              changeBackground();
            }
            return newScore;
          });
          removeLetterFromList(ball.letter);
          return false;
        } else {
          return true;
        }
      })
    );
  };

  const changeBackground = () => {
    setCurrentBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgrounds.length
    );
  };

  useInterval(() => {
    if (!isPaused) {
      spawnBall();
      setElapsedTime((prevTime) => prevTime + 1);
    }
  }, 1000);

  const checkOverlap = (newBall, balls) => {
    return balls.some((ball) => {
      const dx = newBall.x - ball.x;
      const dy = newBall.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < newBall.radius + ball.radius;
    });
  };

  const spawnBall = () => {
    const randomLetter = generateRandomLetter();
    const randomX = Math.random() * (canvasRef.current.width - 60) + 30;
    const randomRadius = 30;
    const randomSpeed = Math.random() * 1 + 0.5;

    const newBall = {
      x: randomX,
      y: -randomRadius,
      radius: randomRadius,
      speed: randomSpeed,
      letter: randomLetter,
      img: generateRandomBallImage(),
    };

    setBalls((prevBalls) => {
      if (checkOverlap(newBall, prevBalls)) {
        return prevBalls;
      } else {
        return [...prevBalls, newBall];
      }
    });
  };

  const generateRandomLetter = () => {
    const keys = Object.keys(koreanKeyMap);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const generateRandomBallImage = () => {
    const currentBackground = backgrounds[currentBackgroundIndex];
    const ballImageArray = ballImages[currentBackground];
    return ballImageArray[Math.floor(Math.random() * ballImageArray.length)];
  };

  const removeLetterFromList = (letter) => {
    setBalls((prevBalls) => prevBalls.filter((ball) => ball.letter !== letter));
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      handleKeydown(event);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [balls, score]);

  useEffect(() => {
    let timer;
    if (!isPaused && !isEnd) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPaused, isEnd]);

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center ${
        season ? `${season}-gradient` : ""
      }`}
    >
      <StarsCanvas />
      <canvas
        id="gameCanvas"
        ref={canvasRef}
        width="600"
        height="600"
        className="relative bg-white rounded-lg shadow-card mt-12 mb-10 w-full max-w-[38rem]"
      ></canvas>
      <div className="absolute top-2 left-0 right-0 mx-auto flex flex-col sm:flex-row justify-between w-full px-4 ">
        <div className="flex flex-col items-center sm:items-start">
          <div className="bg-gray-800 text-white p-2 w-24 rounded-md flex justify-center xs:hidden xl:block ">
            Points: {score}
          </div>
          <button
            className="mb-4 mt-2  h-8 bg-contain bg-center flex bg-no-repeat xs:hidden xl:block"
            style={{ backgroundImage: "url(buttonOwn.jpg) " }}
            onClick={() => document.location.reload()}
          >
            New Game
          </button>
          <button
            className="mb-4 w-24 h-8 bg-contain bg-center bg-no-repeat bg-gray-300 border-gray-100 border-[1px] border-solid xs:hidden xl:block"
            style={{ backgroundImage: "url(buttonOwn.jpg)" }}
          >
            Time: {elapsedTime}s
          </button>
        </div>
        <h1 className="text-3xl font-semibold text-center text-black xs:block">
          LET'S PLAY
        </h1>
        <div className="bg-gray-800 text-white p-2 h-10 rounded-md xs:hidden xl:block">
          Health: {health}
        </div>
      </div>
      <div className="absolute bottom-2 left-2">
        <button
          id="menuButton"
          className="w-10 h-10 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${menu})` }}
          onClick={() => setIsPaused(true)}
        ></button>
      </div>

      <div
        className={`absolute bottom-2 right-2 flex p-2 rounded-md ${
          isOnSupport ? "bg-black text-white" : "hidden"
        }`}
        ref={containLetterRef}
      ></div>

      {isPaused && (
        <div
          id="MenuScreen"
          className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 p-8 rounded-lg w-full max-w-[26rem] xs:max-w-full"
        >
          {isEnd && (
            <div className="text-white bg-black">Your Score: {score}</div>
          )}
          <button
            className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(buttonOwn.jpg)" }}
            onClick={() => document.location.reload()}
          >
            New Game
          </button>
          {!isEnd && (
            <button
              className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(buttonOwn.jpg)" }}
              onClick={() => setIsPaused(false)}
            >
              Resume
            </button>
          )}
          <button
            className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(buttonOwn.jpg)" }}
            onClick={() => setIsOnSupport(!isOnSupport)}
          >
            {isOnSupport ? "Off Support" : "On Support"}
          </button>
          <button
            className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat"
            onClick={() => (window.location.href = "./sadstory")}
          >
            Trailer
          </button>
          <button
            className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat"
            onClick={() => (window.location.href = "./home")}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
