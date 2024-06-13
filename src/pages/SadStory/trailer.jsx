import React, { useEffect, useState } from 'react';
import boyImage from '../../assets/sadstory/boy.png';
import girlImage from '../../assets/sadstory/girl.png';
import flowerImage from '../../assets/sadstory/flower.png';
import sadBoyImage from '../../assets/sadstory/sadboy.png';

export default function Scene() {
  const [boySrc, setBoySrc] = useState(boyImage);
  const [flowerStyles, setFlowerStyles] = useState('opacity-0 left-[-20%]');
  const [messageOpacity, setMessageOpacity] = useState('opacity-0');
  const [chatBoxOpacity, setChatBoxOpacity] = useState('opacity-0');
  const [chatBox2Opacity, setChatBox2Opacity] = useState('opacity-0');
  const [girlRight, setGirlRight] = useState('right-[30%]');
  const [boyLeft, setBoyLeft] = useState('left-[-20%]');
  const [boyOpacity, setBoyOpacity] = useState('opacity-100');
  const [storyText, setStoryText] = useState('');


  useEffect(() => {
    setTimeout(() => {
      setStoryText('Chàng trai bước vào và nhìn thấy bông hoa...');
    }, 1000);

    setTimeout(() => {
      setBoyLeft('left-[45%]');
    }, 1000);

    setTimeout(() => {
      setStoryText('Bông hoa bay đến...');
    }, 2000);

    
    setTimeout(() => {
      setFlowerStyles('left-[55%] bottom-[20%] opacity-100');
    }, 2000);

    setTimeout(() => {
      setStoryText('chàng trai nói ....');
    }, 2500);

    setTimeout(() => {
      setMessageOpacity('opacity-100');
      setChatBoxOpacity('opacity-100');
    }, 2500);

    setTimeout(() => {
      setStoryText('cô gái nói ....');
    }, 4500);

    setTimeout(() => {
      setChatBoxOpacity('opacity-0');
      setChatBox2Opacity('opacity-100');
    }, 4500);

    setTimeout(() => {
      setStoryText('sau đó thì cô gái rời đi bỏ lại chàng trai ...');
    }, 6000);

    setTimeout(() => {
      setGirlRight('right-[-100%]');
    }, 6500);

    setTimeout(() => {
      setStoryText('chàng trai buồn ');
    }, 7500);

    setTimeout(() => {
      setFlowerStyles('left-[55%] bottom-[10%]');
      setTimeout(() => {
        setFlowerStyles('left-[55%] bottom-[10%] opacity-0');
        setBoySrc(sadBoyImage);
      }, 1000);
    },7500);

    setTimeout(() => {
      setStoryText('quyết tâm chinh phục tiếng hàn ');
    }, 9500);
    setTimeout(() => {
      setBoyLeft('left-[100%]');
      setBoyOpacity('opacity-0');
      setChatBox2Opacity('opacity-0');
    }, 9500);

    setTimeout(() => {
      window.location.href = "/trailer"; 
    }, 10000);
  }, []);

  return (
    <div className="relative w-[1500px] h-[800px] overflow-hidden bg-black">
       <div className="fixed top-0 left-0 w-full p-4 bg-white/70 backdrop-blur-md">
        {storyText}
      </div>
      <img src={boySrc} alt='Boy' className={`absolute bottom-[10%] transition-all duration-2000 ${boyLeft} ${boyOpacity} w-[15%]`} />
      <img src={girlImage} alt='Girl' className={`absolute bottom-[10%] transition-all duration-2000 ${girlRight} w-[15%]`} />
      <img src={flowerImage} alt='Flower' className={`absolute transition-all duration-2000 ${flowerStyles} w-[10%]`} />
      <div className={`absolute top-[10%] left-1/2 transform -translate-x-1/2 ${messageOpacity} transition-opacity duration-2000`}>Hạnh phúc</div>
      <div className={`absolute bottom-[50%] left-1/2 bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBoxOpacity}`}>Chào bạn!</div>
      <div className={`absolute bottom-[50%] right-[35%] bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBox2Opacity}`}>Chào bạn 2!</div>

    </div>
  );
}

