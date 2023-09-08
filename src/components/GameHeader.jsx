import React from 'react';
import PropTypes from 'prop-types';

const GameHeader = ({ timer }) => {
  return (
    <header className="flex items-center justify-between gap-2 md:gap-5 p-5 bg-my-blue h-20 md:h-24 text-white text-left text-3xl">
      <div className="flex items-center gap-3">
        <div className=" flex justify-content bg-white w-10 h-10 md:w-14 md:h-14 rounded-md opacity-80">
          <img
            src="imgs/icon.png"
            alt="icon"
            className="block w-1/2 m-auto place-content-center"
          ></img>
        </div>
        <h1 className=" text-xl md:text-3xl font-extrabold">크로스 워드</h1>
      </div>
      <div className="text-xl">
        <span className="text-sm">남은 시간 </span>
        <span>{timer}</span>
      </div>
    </header>
  );
};
GameHeader.propTypes = {
  timer: PropTypes.number,
};
export default GameHeader;
