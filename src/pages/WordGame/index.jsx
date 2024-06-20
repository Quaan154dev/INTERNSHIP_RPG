import React from "react";
import { useSelector } from "react-redux";
import Heading from "../../components/Heading/Heading";
import Board from "../../components/Board/Board";
import ParticlesComponent from "../../components/Particles/Particles";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../ThemeContext";
import { StarsCanvas } from "../../components/canvas";

const WordGame = () => {
  const { season } = useTheme();

  const board = useSelector((state) => state.board.board);

  return (
    <div className={`${season}-gradient w-full h-full relative `}>
      <div
        className={`${season}-gradient pt-8 h-screen flex overflow-hidden flex-col`}
      >
        <ParticlesComponent id="particles" />
        <Heading type="h1" text="Word guessing game" />
        <div
          className={`spring-gradient flex flex-wrap flex-col mt-6 items-center justify-center`}
        >
          <Board board={board} />
        </div>
      </div>
    </div>
  );
};

export default WordGame;
