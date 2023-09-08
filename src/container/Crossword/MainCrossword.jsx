import React from 'react';
import Button from '../../components/Button';
import PropTypes from 'prop-types';

const MainCrossword = ({ setVisible, setAction }) => {
  const mainMenu = [
    { name: '도움말', onClick: () => setVisible(true) },
    { name: '로그인', onClick: null },
    { name: 'PLAY', onClick: () => setAction('Play') },
  ];
  const today =
    new Date().getFullYear() +
    '.' +
    (new Date().getMonth() + 1).toString().padStart(2, '0') +
    '.' +
    new Date().getDate().toString().padStart(2, '0');

  return (
    <div className="grid gap-10 my-5">
      <div className="grid gap-2">
        <img
          src="imgs/icon.png"
          alt="icon"
          className="block w-40 md:w-100% m-auto place-content-center"
        ></img>
        <h1 className=" text-3xl md:text-7xl font-extrabold ">크로스워드</h1>
        <h2 className=" text-xl md:text-2xl font-extrabold">
          기사 퍼즐의 왕을 가린다!
        </h2>
        <div className="flex gap-3 justify-center mt-6">
          {mainMenu.map((menu, i) => {
            return (
              <Button
                key={i}
                type="button"
                className="border-[1px] border-my-blue  w-24 h-12 md:w-40 md:h-14   text-my-blue md:text-xl font-extrabold rounded-full hover:bg-my-blue hover:text-white"
                onClick={menu.onClick}
                text={menu.name}
              ></Button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <p className=" text-xl md:text-3xl font-extrabold">
            북상 태풍 카눈 북상 태풍 카눈 예측...
          </p>
        </div>
        <div className=" text-sm md:text-base text- font-normal">{today}</div>
      </div>
    </div>
  );
};

MainCrossword.propTypes = {
  setVisible: PropTypes.func,
  setAction: PropTypes.func,
};
export default MainCrossword;
