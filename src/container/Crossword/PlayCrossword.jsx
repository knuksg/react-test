import React, { useEffect, useRef, useState } from 'react';
import CrossWordContents from '../../assets/crossword.json';
import PropTypes from 'prop-types';
import devideWords from '../../utils/divideWords';
import crosswordAlgorithm from '../../utils/crosswordAlgorithm';
import AfterPlay from '../../components/AfterPlay';
import Button from '../../components/Button';

// text backspace를 치면 crossword iput창의 value값도 지워지게 해야함
const PlayCrossword = ({ isOver, isSuccess, setIsSuccess }) => {
  const { map, words } = CrossWordContents;
  const { wordSet, blankSet } = devideWords();
  const [wordLoc, setWordLoc] = useState({
    direction: 'horizontal',
    currentIdx: 0,
    position: blankSet.horizontal.allBlank[0],
    anwer: [],
  });
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [correct, setCorrect] = useState({});
  // 자주 사용하는 변수
  const isHorizon = wordLoc.direction === 'horizontal';
  const variable = isHorizon ? 1 : 6;
  const totalWords = words.length;
  const playMenu = [
    { eng: 'horizontal', kor: '가로' },
    { eng: 'vertical', kor: '세로' },
  ];
  const findPosition = () => {
    // 현재 index로 position 찾기
    for (let i = 0; i < 5; i++) {
      if (blankSet[wordLoc.direction][wordLoc.index - i * variable])
        setWordLoc({ ...wordLoc, position: wordLoc.index - i * variable });
    }
  };
  const checkAnswer = () => {
    const answer = wordSet[wordLoc.direction].find(
      (v) => v.position === wordLoc.position,
    ).word;
    // 정답이면 글자 고정, 정답 알림
    if (value === answer) {
      countRef.current++;
      let answerObj = {};
      for (let i = 0; i < answer.length; i++) {
        answerObj[wordLoc.position + i * variable] = answer[i];
      }
      setCorrect({ ...correct, ...answerObj });
    }
    if (value !== answer) {
      setTimeout(() => [200]);
    }

    if (countRef.current === totalWords) {
      setIsSuccess(true);
    }
  };

  useEffect(() => {
    findPosition();
  }, [wordLoc.index]);

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
      setValue('');
    }
  };

  return (
    <div className="w-fit">
      <div className="md:grid md:grid-rows-5 md:grid-cols-4">
        <div className="grid grid-cols-6 border border-gray-200 w-fit my-10 mx-auto md:row-span-4 md:col-span-2">
          {map.flat().map((space, i) => {
            const { crosswordValue, crosswordCssAlgorithm, crosswordIdx } =
              crosswordAlgorithm({
                correct,
                i,
                value,
                variable,
                space,
                blankSet,
                wordLoc,
                isSuccess,
                isHorizon,
                isOver,
              });
            return (
              <div key={i} className="relative">
                <p className=" absolute m-0.5 md:m-3 text-sm md:text-base">
                  {crosswordIdx()}
                </p>
                <input
                  size="1"
                  type="text"
                  onClick={() => {
                    setWordLoc({ ...wordLoc, index: i });
                    inputRef.current.focus();
                  }}
                  className={`border border-gray-400 w-14 h-14 text-center text-sm font-extrabold ${crosswordCssAlgorithm()}`}
                  value={crosswordValue()}
                  disabled={
                    !blankSet[wordLoc.direction].allBlank.includes(i) ||
                    Object.keys(correct).includes(i.toString()) ||
                    isOver ||
                    isSuccess
                  }
                ></input>
              </div>
            );
          })}
        </div>
        <div className="flex items-center m-auto  border-2 border-200-black text-base md:text-xl  w-fit md:w-11/12 rounded font-extrabold md:order-last md:row-span-1 md:col-span-4 ">
          <div
            className={`border-r-2 text-my-blue px-2 md:w-20
          ${isOver && 'text-red-500'}
          `}
          >
            {!isOver && !isSuccess ? (isHorizon ? '가로' : '세로') : null}
            {isOver && '실패'}
            {isSuccess && '성공'}
          </div>
          <input
            ref={inputRef}
            value={
              isSuccess
                ? '모두 맞추셨습니다'
                : isOver
                ? '모두 맞추지 못했습니다'
                : value
            }
            maxLength={blankSet[wordLoc.direction][wordLoc.position].length}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className={`mx-5 my-3 text-sm md:text-xl md:w-full 
            ${isOver && 'text-red-500'}
            ${isSuccess && 'text-my-blue'}
            `}
            placeholder="터치 후 입력하세요"
            disabled={isOver || isSuccess}
            onKeyDown={(e) => activeEnter(e)}
          ></input>
          <div className="border-l-2 border-gray-400 md:w-20">
            <button
              className=" text-black p-2.5 h-full md:text-xl bg-[#F8F8F8]"
              onClick={() => {
                checkAnswer();
                setValue('');
              }}
            >
              입력
            </button>
          </div>
        </div>

        <div className="w-5/6 p-3 m-4 mx-auto text-[#999999] md:row-span-4 md:col-span-2 ">
          <div className="flex gap-0 m-0">
            {playMenu.map((v, i) => (
              <Button
                key={i}
                onClick={() => {
                  setWordLoc({
                    ...wordLoc,
                    direction: v.eng,
                    position: blankSet[v.eng].allBlank[0],
                  });
                  setValue('');
                }}
                text={`${v.kor}(${wordSet[v.eng].length})`}
                className={`border border-gary-200 font-bold px-5 py-1 shadow w-1/2 rounded-t ${
                  v.eng === wordLoc.direction
                    ? 'border-2 border-b-0 border-my-blue text-my-blue  '
                    : 'border-b-my-blue'
                } `}
              />
            ))}
          </div>
          <div className="grid gap-4 text-sm my-5 mx-2">
            {wordSet[wordLoc.direction].map((word, idx) => {
              return (
                <div key={idx} className="grid grid-cols-5">
                  <div className=" col-span-4 flex ">
                    <p
                      className={` font-extrabold ${
                        wordLoc.position === word.position && 'text-my-blue'
                      }`}
                    >
                      {isHorizon
                        ? (word.position / 5 + 1) >> 0
                        : (word.position % 5) + 1}
                      {'. '}
                    </p>
                    <p
                      className={`text-left text-black md:max-w-sm ${
                        Object.keys(correct).includes(
                          word.position.toString(),
                        ) && 'text-gray-500'
                      }`}
                    >
                      {word.description}
                    </p>
                  </div>
                  <button
                    className="border border-my-blue text-my-blue w-14 h-9 rounded-3xl 
                
                  "
                    disabled={Object.keys(correct).includes(
                      word.position.toString(),
                    )}
                  >
                    {Object.keys(correct).includes(word.position.toString())
                      ? '정답'
                      : '힌트'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isOver || isSuccess ? (
        <AfterPlay isOver={isOver} isSuccess={isSuccess}></AfterPlay>
      ) : null}
    </div>
  );
};

PlayCrossword.propTypes = {
  isOver: PropTypes.bool,
  setIsSuccess: PropTypes.func,
  isSuccess: PropTypes.bool,
};
export default PlayCrossword;
