import React from "react";
import Square from "../Square/Square";
import Keyboard from "../Keyboard/Keyboard";

const Board = (props) => {
  const { board } = props;
  // console.log("board:", board);
  return (
    <>
      <div className="h-72 w-72 self-center justify-center grid grid-cols-5 gap-x-1 gap-y-1 mb-8 text-white">
        {board.map((square, idx) => {
          return (
            <div key={idx}>
              <Square val={square} squareIdx={idx} />
            </div>
          );
        })}
      </div>
      <div className="">
        <Keyboard />
      </div>
    </>
  );
};

export default Board;
