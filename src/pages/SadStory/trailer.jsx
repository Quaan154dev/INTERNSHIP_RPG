// import React, { useEffect, useState } from 'react';
// import boyImage from '../../assets/sadstory/boy.png';
// import girlImage from '../../assets/sadstory/girl.png';
// import flowerImage from '../../assets/sadstory/flower.png';
// import sadBoyImage from '../../assets/sadstory/sadboy.png';

// export default function Scene() {
//   const [boySrc, setBoySrc] = useState(boyImage);
//   const [flowerStyles, setFlowerStyles] = useState('opacity-0 left-[-20%]');
//   const [messageOpacity, setMessageOpacity] = useState('opacity-0');
//   const [chatBoxOpacity, setChatBoxOpacity] = useState('opacity-0');
//   const [chatBox2Opacity, setChatBox2Opacity] = useState('opacity-0');
//   const [girlRight, setGirlRight] = useState('right-[30%]');
//   const [boyLeft, setBoyLeft] = useState('left-[-20%]');
//   const [boyOpacity, setBoyOpacity] = useState('opacity-100');
//   const [storyText, setStoryText] = useState('');


//   useEffect(() => {
//     setTimeout(() => {
//       setStoryText('Chàng trai bước vào và nhìn thấy bông hoa...');
//     }, 1000);

//     setTimeout(() => {
//       setBoyLeft('left-[45%]');
//     }, 1000);

//     setTimeout(() => {
//       setStoryText('Bông hoa bay đến...');
//     }, 2000);

    
//     setTimeout(() => {
//       setFlowerStyles('left-[55%] bottom-[20%] opacity-100');
//     }, 2000);

//     setTimeout(() => {
//       setStoryText('chàng trai nói ....');
//     }, 2500);

//     setTimeout(() => {
//       setMessageOpacity('opacity-100');
//       setChatBoxOpacity('opacity-100');
//     }, 2500);

//     setTimeout(() => {
//       setStoryText('cô gái nói ....');
//     }, 4500);

//     setTimeout(() => {
//       setChatBoxOpacity('opacity-0');
//       setChatBox2Opacity('opacity-100');
//     }, 4500);

//     setTimeout(() => {
//       setStoryText('sau đó thì cô gái rời đi bỏ lại chàng trai ...');
//     }, 6000);

//     setTimeout(() => {
//       setGirlRight('right-[-100%]');
//     }, 6500);

//     setTimeout(() => {
//       setStoryText('chàng trai buồn ');
//     }, 7500);

//     setTimeout(() => {
//       setFlowerStyles('left-[55%] bottom-[10%]');
//       setTimeout(() => {
//         setFlowerStyles('left-[55%] bottom-[10%] opacity-0');
//         setBoySrc(sadBoyImage);
//       }, 1000);
//     },7500);

//     setTimeout(() => {
//       setStoryText('quyết tâm chinh phục tiếng hàn ');
//     }, 9500);
//     setTimeout(() => {
//       setBoyLeft('left-[100%]');
//       setBoyOpacity('opacity-0');
//       setChatBox2Opacity('opacity-0');
//     }, 9500);

//     setTimeout(() => {
//       window.location.href = "/trailer"; 
//     }, 10000);
//   }, []);

//   return (
//     <div className="relative w-[1500px] h-[800px] overflow-hidden bg-black">
//        <div className="fixed top-0 left-0 w-full p-4 bg-white/70 backdrop-blur-md">
//         {storyText}
//       </div>
//       <img src={boySrc} alt='Boy' className={`absolute bottom-[10%] transition-all duration-2000 ${boyLeft} ${boyOpacity} w-[15%]`} />
//       <img src={girlImage} alt='Girl' className={`absolute bottom-[10%] transition-all duration-2000 ${girlRight} w-[15%]`} />
//       <img src={flowerImage} alt='Flower' className={`absolute transition-all duration-2000 ${flowerStyles} w-[10%]`} />
//       <div className={`absolute top-[10%] left-1/2 transform -translate-x-1/2 ${messageOpacity} transition-opacity duration-2000`}>Hạnh phúc</div>
//       <div className={`absolute bottom-[50%] left-1/2 bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBoxOpacity}`}>Chào bạn!</div>
//       <div className={`absolute bottom-[50%] right-[35%] bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBox2Opacity}`}>Chào bạn 2!</div>

//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import sadBoyImage from '../../assets/sadstory/sadboy.png';
import boyImage from '../../assets/sadstory/boy.png';
import studyingBoyImage from '../../assets/sadstory/girl.png';
import buddhaImage from '../../assets/sadstory/but.png';
import gameImage from '../../assets/sadstory/boy.png';
import HighExamImage from '../../assets/sadstory/highTest.png';
import LowExamImage from '../../assets/sadstory/lowTest.png';

export default function Scene() {
  const [lowExamStyles, setlowExamStyles] = useState('opacity-0 right-[-20%]');
  const [highExamStyles, sethighExamStyles] = useState('opacity-0 right-[-20%]');
  const [boySrc, setBoySrc] = useState(boyImage);
  const [buddhaVisible, setBuddhaVisible] = useState(false);
  const [gameVisible, setGameVisible] = useState(false);
  const [studyVisible, setStudyVisible] = useState(false);
  const [examVisible, setExamVisible] = useState(false);
  const [storyText, setStoryText] = useState('');
  const [boyStyle, setBoyStyle] = useState({ left: '10%', opacity: 1 });
  const [chatBoxMessage, setChatBoxMessage] = useState('');
  const [chatBoxOpacity, setChatBoxOpacity] = useState('opacity-0');
  const [chatBoxPosition, setChatBoxPosition] = useState({ bottom: 'auto', left: 'auto' });

  useEffect(() => {
    setTimeout(() => {
      setStoryText('Cậu bé A');
    }, 1000);

    setTimeout(() => {
      setlowExamStyles('right-[58%] bottom-[20%] opacity-100');
    }, 1500);

    setTimeout(() => {
      setBoyStyle({ left: '30%', opacity: 1 });
    }, 2000);

    setTimeout(() => {
      setlowExamStyles('right-[58%] bottom-[20%] opacity-0');
      setStoryText('Nhận được bài kiểm tra và khóc');
      setBoySrc(sadBoyImage);
    }, 3000);

    setTimeout(() => {
      setStoryText('Ông Bụt hiện lên và nói:');
      setBuddhaVisible(true);
    }, 4000);

    setTimeout(() => {
      setChatBoxMessage('Tại sao con khóc?');
      setChatBoxPosition({ bottom: '50%', left: '55%' }); // Position above Buddha's head
      setChatBoxOpacity('opacity-100');
    }, 4500);

    setTimeout(() => {
      setChatBoxOpacity('opacity-0');
    }, 6000);

    setTimeout(() => {
      setChatBoxMessage('Con bị điểm thấp');
      setChatBoxPosition({ bottom: '50%', left: '20%' }); // Position above Boy's head
      setChatBoxOpacity('opacity-100');
    }, 6500);

    setTimeout(() => {
      setChatBoxOpacity('opacity-0');
    }, 8000);

    setTimeout(() => {
      setChatBoxMessage('Vậy con hãy học tại ...');
      setChatBoxPosition({ bottom: '50%', left: '55%' }); // Position above Buddha's head
      setChatBoxOpacity('opacity-100');
    }, 8500);

    setTimeout(() => {
      setBoyStyle({ left: '30%', opacity: 0 });
      setBuddhaVisible(false);
      setChatBoxOpacity('opacity-0');
    }, 10000);

    setTimeout(() => {
      setStoryText('Cậu bé chăm chỉ học tại...');
      setGameVisible(true);
    }, 10500);

    setTimeout(() => {
      setStoryText('Một thời gian sau ... ');
      setGameVisible(false);
      setBoySrc(boyImage);
      setBoyStyle({ opacity: 1 });
    }, 11000);

    setTimeout(() => {
      sethighExamStyles('right-[58%] bottom-[20%] opacity-100');
    }, 12000);

    setTimeout(() => {
      setStoryText('Cậu có một cuộc thi và đạt được điểm cao');
    }, 12500);

    setTimeout(() => {
      setBoyStyle({ left: '30%', opacity: 1 });
    }, 13000);

  }, []);

  return (
    <div className="relative w-[1500px] h-[800px] overflow-hidden bg-black">
      <div className="fixed top-0 left-0 w-full p-4 bg-white/70 backdrop-blur-md">
        {storyText}
      </div>
      <img src={boySrc} alt='Boy' className="absolute bottom-[10%] transition-all duration-2000 w-[15%]" style={boyStyle} />
      {buddhaVisible && <img src={buddhaImage} alt='Buddha' className="absolute bottom-[10%] left-[45%] transition-all duration-2000 opacity-100 w-[30%]" />}
      <div className={`absolute bg-white p-2.5 rounded-lg shadow-lg transition-all duration-2000 ${chatBoxOpacity}`} style={chatBoxPosition}>{chatBoxMessage}</div>
      <img src={LowExamImage} alt='Flower' className={`absolute transition-all duration-2000 ${lowExamStyles} w-[5%]`} />
      {gameVisible && <img src={gameImage} alt='Game' className="absolute bottom-[30%] left-[50%] transition-all duration-2000 opacity-100 w-[15%]" />}
      {studyVisible && <img src={studyingBoyImage} alt='Studying' className="absolute bottom-[10%] left-[30%] transition-all duration-2000 opacity-100 w-[15%]" />}
      <img src={HighExamImage} alt='Flower' className={`absolute transition-all duration-2000 ${highExamStyles} w-[5%]`} />
    </div>
  );
}
