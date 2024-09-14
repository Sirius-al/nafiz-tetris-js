'use client';
import React from "react";
// import MyScripts from '@/components/MyScripts';

const page = () => {
  return (
    <>
      <canvas id="myCanvas" />
      <div className="result-container">
        <div id="game-header">
          <p>TETRIS</p>
        </div>
        <div id="score" className="score">
          <p>
            Score: <span id="score__text">0</span>
          </p>
          <p>
            Level: <span id="level__text">1</span>
          </p>
        </div>
        <div id="next-block" className="next-block">
          <canvas id="nextCanvas" />
        </div>
        <div id="mobile__contorls" className="mobile__contorls">
          <div id="rotate">
            <div id="rotate__text" />
          </div>
          <div id="leftRight">
            <div id="left__div">
              <i className="fas fa-chevron-left fa-2x" />
            </div>
            <div id="right__div">
              <i className="fas fa-chevron-right fa-2x" />
            </div>
          </div>
          <div id="down">Down</div>
        </div>
        <div id="contorls" className="contorls">
          <span id="controls__play">Play</span>
        </div>
      </div>
      {/* <MyScripts /> */}
    </>
  );
};

export default page;
