// chứng những thành state lên quan đến board
import { createSlice } from "@reduxjs/toolkit";
// import { start } from "repl";
import wordList from "../words.json";

let randomNum = Math.floor(Math.random() * wordList.words.length);

const initialState = {
  board: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  pos: 0,
  row: 0,
  key: "",
  correctWord: wordList.words[randomNum].toUpperCase(),
};
export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    incPos: (state) => {
      state.pos++;
    },
    decPos: (state) => {
      state.pos--;
    },
    incRow: (state) => {
      state.row++;
    },
    setkey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { setBoard, incPos, decPos, incRow, setkey } = boardSlice.actions;
export default boardSlice.reducer;
