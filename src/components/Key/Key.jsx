import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incPos, setBoard } from "../../redux/BoardSlice";

const Key = (props) => {
  const { letter } = props;
  const board = useSelector((state) => state.board.board);
  const position = useSelector((state) => state.board.pos);
  const row = useSelector((state) => state.board.row);

  const dispatch = useDispatch();
  let currentRow = Math.floor(position / 5);
  const chooseLetter = () => {
    // console.log(Math.floor(position / 5));

    if (position >= 30) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard)); // gửi đi
    dispatch(incPos());
  };
  return (
    <div
      className="bg-gray-500 text-white font-bold text-md m-1 rounded p-[0.35em] cursor-pointer"
      onClick={chooseLetter}
    >
      {letter}
    </div>
  );
};

export default Key;
