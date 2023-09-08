import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const AfterPlay = ({ isOver, isSuccess }) => {
  console.log(isOver, isSuccess);
  // eslint-disable-next-line no-unused-vars
  const [isMember, SetInMember] = useState(false);
  const logic = {
    guest: {
      guide: (
        <>
          {' '}
          <p className=" font-extrabold">
            ※ 게스트는 별도 가입 없이{' '}
            <span className="text-my-blue">SNS로그인</span>으로 기사와 게임을
            계속 즐기실 수 있습니다.
          </p>
        </>
      ),
    },
    member: {
      guide: (
        <p className=" font-extrabold">
          ※ <span className="text-my-blue">홍길동</span>님 크로스워드 참여로{' '}
          <span className="text-my-blue">지식점수 10점</span>을 획득하셨습니다.
        </p>
      ),
    },
  };
  let crosswordState = '';
  if (isMember && isSuccess) crosswordState = 'type1';
  if (!isMember && isSuccess) crosswordState = 'type2';
  if (isOver) crosswordState = 'type3';
  // eslint-disable-next-line no-unused-vars
  const type = {
    type1: [
      { name: '공유하기', onClick: null },
      { name: '다른문제', onClick: null, img: 'imgs/icon.png' },
    ],
    type2: [
      { name: '공유하기', onClick: null },
      { name: 'sns 로그인', onClick: null, img: 'imgs/icon.png' },
    ],
    type3: [
      { name: '공유하기', onClick: null },
      { name: '다시하기', onClick: null, img: 'imgs/icon.png' },
    ],
  };

  return (
    <div className="grid gap-4 bg-[#EDF4FA] p-14">
      <div>{isMember ? logic.member.guide : logic.guest.guide}</div>
      {type[crosswordState].map((v, i) => {
        return (
          <Button
            key={i}
            onClick={v.onClick}
            text={v.name}
            img={v.img}
            className="flex gap-3 items-center justify-center w-full h-12 border border-gray-400 bg-white font-extrabold rounded"
          ></Button>
        );
      })}
    </div>
  );
};

AfterPlay.propTypes = {
  isOver: PropTypes.bool,
  isSuccess: PropTypes.bool,
};
export default AfterPlay;
