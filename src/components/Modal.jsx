import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ setVisible }) => {
  const modalRef = useRef(null);
  const help = [
    {
      number: 1,
      text: '가로, 세로 힌트를 보고 빈 칸에 정답을 입력.',
      img: 'imgs/gamebox_1.png',
    },
    {
      number: 2,
      text: '정답일 경우, 파란색으로 표시됨.',
      img: 'imgs/gamebox_2.png',
    },
  ];
  // const handleModalOpen = () => {
  //   setTimeout(() => {
  //     setModalVisible(true);
  //   }, 300);
  // };

  return (
    <div className=" fixed top-0 left-0 h-full w-full bg-opacity-20 bg-[#000000]">
      <div
        ref={modalRef}
        className=" fixed top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit items-center"
      >
        <div className=" z-1 flex flex-col gap-7 bg-white justify-center p-10 shadow-md rounded">
          <header className="flex justify-between">
            <div className=" text-2xl font-extrabold">
              크로스 워드 플레이 방법
            </div>
            <AiOutlineClose
              onClick={() => setVisible(false)}
              className=" cursor-pointer text-right text-2xl font-extrabold hover:bg-[#F7F7F7]"
            ></AiOutlineClose>
          </header>
          <describe className="grid gap-6 bg-[#F7F7F7] p-7">
            {help.map((num, i) => {
              return (
                <div key={i} className="text-lg">
                  <div className="text-left">
                    <span className="bg-my-blue w-fit px-2.5 py-0.5 text-white rounded-full">
                      {num.number}
                    </span>
                    <span> {num.text}</span>
                  </div>
                  <img src={num.img} className="block m-auto"></img>
                </div>
              );
            })}
          </describe>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setVisible: PropTypes.func,
};
export default Modal;
