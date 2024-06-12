import React, { useState, useEffect, useRef } from 'react';
import useInterval from '../hooks/useInterval';

import springBg from '../assets/Spring/Spring.jpg';
import summerBg from '../assets/Summer/Summer.jpg';
import fallBg from '../assets/Fall/Fall.jpg';
import winterBg from '../assets/winter/Winter.jpg';

import cherryBlossom from '../assets/Spring/cherry-blossom.png';
import kimbap from '../assets/Spring/kimbap.png';
import bikimbap from '../assets/Spring/bibimbap.png';

import fireworks from '../assets/Summer/fireworks.png';
import music from '../assets/Summer/music.png';
import patbingsu from '../assets/Summer/patbingsu.png';

import hanok from '../assets/Fall/hanok.png';
import mapLeaf from '../assets/Fall/maple-leaf.png';
import skyLantern from  '../assets/Fall/sky-lantern.png';


import skiing from '../assets/winter/skiing.png';
import soju from '../assets/winter/soju.png';
import tteokbokki from '../assets/winter/tteokbokki.png';

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

  const backgrounds = [springBg, summerBg, fallBg, winterBg];
  const ballImages = {
    [springBg]: [cherryBlossom, kimbap, bikimbap],
    [summerBg]: [fireworks, music, patbingsu],
    [fallBg]: [hanok, mapLeaf, skyLantern],
    [winterBg]: [skiing, soju, tteokbokki]
  };

  const koreanKeyMap = {
    'ㅏ': 'K',
    'ㅁ': 'A',
    'ㅂ': 'Q',
    'ㅅ': 'W',
    'ㅇ': 'E',
    'ㄹ': 'R',
    'ㅎ': 'T',
    'ㅗ': 'Y',
    'ㅓ': 'U',
    'ㅑ': 'I',
    'ㅐ': 'O',
    'ㅣ': 'P',
    'ㅔ': 'L',
    'ㄱ': 'G',
    'ㄴ': 'H',
    'ㄷ': 'J',
    'ㅈ': 'D',
    'ㅊ': 'F',
    'ㅋ': 'C',
    'ㅌ': 'V',
    'ㅍ': 'B',
    'ㅕ': 'Z',
    'ㅛ': 'X',
    'ㅜ': 'N',
    'ㅠ': 'M',
    'ㅡ': 'S'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawBackground = () => {
      const bg = new Image();
      bg.src = backgrounds[currentBackgroundIndex];
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    };

    const drawBalls = () => {
      balls.forEach(ball => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.closePath();
        const img = new Image();
        img.src = ball.img;
        ctx.drawImage(img, ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 5;
        ctx.fillStyle = '#6EFAFF';
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
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
  }, [balls, isPaused, currentBackgroundIndex]);

  const updateBalls = () => {
    setBalls(prevBalls => {
      const updatedBalls = prevBalls.map(ball => ({
        ...ball,
        y: ball.y + ball.speed
      }));

      updatedBalls.forEach(ball => {
        if (ball.y + ball.radius >= canvasRef.current.height) {
          setHealth(prevHealth => prevHealth - 10);
          if (health <= 0) {
            setIsPaused(true);
            setIsEnd(true);
          }
          removeLetterFromList(ball.letter);
        }
      });

      return updatedBalls.filter(ball => ball.y < canvasRef.current.height - ball.radius);
    });
  };

  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    setBalls(prevBalls => prevBalls.filter(ball => {
      if (koreanKeyMap[ball.letter] === key || ball.letter === key) {
        setScore(prevScore => {
          const newScore = prevScore + 10;
          if (newScore % 40 === 0) {
            changeBackground();
          }
          return newScore;
        });
        removeLetterFromList(ball.letter);
        return false;
      } else {
        return true;
      }
    }));
  };

  const changeBackground = () => {
    setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
  };

  useInterval(() => {
    if (!isPaused) {
      spawnBall();
    }
  }, 2000);

  const checkOverlap = (newBall, balls) => {
    return balls.some(ball => {
      const dx = newBall.x - ball.x;
      const dy = newBall.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < newBall.radius + ball.radius;
    });
  };

  const spawnBall = () => {
    const letters = 'ㅏㅁㅂㅅㅇㄹㅎㅗㅓㅑㅐㅣㅔㄱㄴㄷㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔ';
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const currentBackground = backgrounds[currentBackgroundIndex];
    const imgList = ballImages[currentBackground];
    const img = imgList[Math.floor(Math.random() * imgList.length)];

    let newBall;
    do {
      const x = Math.random() * (canvasRef.current.width - 80) + 40;
      newBall = { x, y: 10, radius: 35, letter, img, speed: 1 + score / 100 };
    } while (checkOverlap(newBall, balls));

    setBalls(prevBalls => [...prevBalls, newBall]);
    addLetterToList(letter);
  };

  function addLetterToList(letter) {
    const englishLetter = koreanKeyMap[letter] || letter;
    const letterElement = document.createElement('div');
    letterElement.textContent = englishLetter;
    letterElement.id = `letter-${letter}`;
    containLetterRef.current.appendChild(letterElement);
  }

  function removeLetterFromList(letter) {
    const letterElement = document.getElementById(`letter-${letter}`);
    if (letterElement) {
      letterElement.remove();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center">
    <canvas id="gameCanvas" ref={canvasRef} width="600" height="600" className="relative bg-white rounded-lg shadow-2xl mt-10"></canvas>
    <div className="absolute top-2 left-0 right-0 mx-auto flex justify-between w-full px-4">
      <div className="bg-gray-800 text-white p-2 rounded-md">Score: {score}</div>
      <div className="bg-gray-800 text-white p-2 rounded-md">Health: {health}</div>
    </div>
    
    <div className="absolute bottom-2 left-2">
      <button id="menuButton" className="w-10 h-10 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url(./menu.png)' }} onClick={() => setIsPaused(true)}></button>
    </div>

    <div className={isOnSupport ? "bg-black text-white absolute bottom-2 right-2 flex p-2 rounded-md " :"hidden"   } ref={containLetterRef}></div>

    {isPaused && (
      <div id="MenuScreen" className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 p-8 rounded-lg">

        {isEnd ? <div className='text-white bg-black'>Your Score:{score} </div> : null }

        <button className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url(buttonOwn.jpg)' }} onClick={() => document.location.reload()}>New Game</button>


        {isEnd ? null : <button className= "mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat"  style={{ backgroundImage: 'url(buttonOwn.jpg)' }} onClick={() => setIsPaused(false)}>Resume</button> }
   

        {isOnSupport ?
         (<button className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url(buttonOwn.jpg)' }} onClick={() =>setIsOnSupport(true) }>Off Support</button>):
        (<button className="mb-4 w-36 h-8 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url(buttonOwn.jpg)' }} onClick={() =>setIsOnSupport(true) }>On Support </button>) }
      
     
      </div>
    )}
  </div>

  );
};

export default Game;
