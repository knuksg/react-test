import React, { useState } from 'react';
import Modal from '../../components/Modal';
import MainCrossword from './MainCrossword';
import PlayCrossword from './PlayCrossword';
import useTimer from '../../hook/useTimer';
import GameHeader from '../../components/GameHeader';
const Crossword = () => {
  const [action, setAction] = useState('Main');
  const [visible, setVisible] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { timer } = useTimer({ setIsOver, action, isSuccess });

  return (
    <div className=" h-fit w-fit text-black text-base text-center">
      {visible && <Modal setVisible={setVisible} />}
      <GameHeader timer={timer} />
      <section className="h-max grid place-items-center">
        {action === 'Main' && (
          <MainCrossword setVisible={setVisible} setAction={setAction} />
        )}
        {action === 'Play' && (
          <PlayCrossword
            isOver={isOver}
            setIsSuccess={setIsSuccess}
            isSuccess={isSuccess}
          />
        )}
      </section>
      {action === 'Main' && <footer className="bg-[#656D78] h-48"></footer>}
    </div>
  );
};

export default Crossword;
