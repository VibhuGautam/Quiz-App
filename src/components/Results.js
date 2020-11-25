import React from "react";

const Result = ({score , playagain}) => (
    <div className ="score-board">
        <div className ="score"> You Scored {score} / 5 correct answers!</div>
        <button className ="playBtn" onClick={playagain}>Play Again!</button>
    </div>
);

export default Result;