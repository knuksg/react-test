const crosswordAlgorithm = ({
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
}) => {
  const crosswordValue = () => {
    if (Object.keys(correct).includes(i.toString())) return [correct[i]];
    if (wordLoc.position + (value.length - 1) * variable === i && space) {
      return value[value.length - 1];
    }
  };

  const crosswordCssAlgorithm = () => {
    let styleStr = "";
    // 빈칸 이외는 회색
    if (!space) styleStr += " bg-[#DDDDDD] border-gray-400 ";
    //가로, 세로 맞는 칸 파랑색 보더
    if (blankSet[wordLoc.direction].allBlank.includes(i))
      styleStr += " bg-white border-my-blue ";
    // 현재 포커스 칸
    if (blankSet[wordLoc.direction][wordLoc.position].includes(i))
      styleStr += " text-my-blue bg-yellow-50 ";
    //정답
    if (Object.keys(correct).includes(i.toString()))
      styleStr += " bg-white text-my-blue ";

    if (isSuccess && space) styleStr += " bg-white border-my-blue ";
    if (isOver)
      if (space && !Object.keys(correct).includes(i.toString()))
        styleStr += " border-red-500 ";
    if (i % 6 < 5) styleStr += " border-r ";
    if ((i / 6) >> 0 < 5) styleStr += " border-b";
    return styleStr;
  };
  const crosswordIdx = () => {
    if (isHorizon) {
      {
        if (Object.keys(blankSet.horizontal).includes(i.toString()))
          return (i / 5 + 1) >> 0;
      }
    } else {
      if (Object.keys(blankSet.vertical).includes(i.toString()))
        return (i % 5) + 1;
    }
  };

  return { crosswordValue, crosswordCssAlgorithm, crosswordIdx };
};

export default crosswordAlgorithm;
