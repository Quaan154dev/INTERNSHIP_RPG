import React from "react";
import { useSelector } from "react-redux";
import Heading from "../../components/Heading/Heading";
import Board from "../../components/Board/Board";
import ParticlesComponent from "../../components/Particles/Particles";

const WordGame = () => {
  const board = useSelector((state) => state.board.board);

  return (
    <div className="pt-8 h-screen flex overflow-hidden flex-col">
      {/* <ParticlesComponent id="particles" /> */}
      <Heading type="h1" text="Word guessing game" />
      <div className="flex flex-wrap flex-col mt-6 items-center justify-center">
        <Board board={board} />
      </div>
    </div>
  );
};

export default WordGame;
