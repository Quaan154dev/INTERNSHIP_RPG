import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "../ThemeContext";
//
const Statistics = ({ feedbackCount, visited }) => {
  const [_, setVisited] = useState(0);
  const [feedback, setFeedback] = useState(0);
  const { season } = useTheme();

  const visitedProps = useSpring({
    from: { number: 1 },
    to: { number: visited },
    config: { duration: 1000 },
    reset: true,
  });
  const feedbackProps = useSpring({
    from: { number: 1 },
    to: { number: feedbackCount },
    config: { duration: 1000 },
    reset: true,
  });

  return (
    <>
      <button
        className={`${season}-bottom-text flex gap-2 justify-center items-center`}
        onClick={() => setVisited(visited)}
        style={{
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      ></button>
      <button
        className={`  ${season}-bottom-text flex gap-2 justify-center items-center`}
        onClick={() => setFeedback(feedbackCount)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      ></button>
    </>
  );
};

export default Statistics;
