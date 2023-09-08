import CrossWordContents from "../assets/crossword.json";
// "word": "주치의",
// "position": 2,
// "direction": "horizontal",
// "description": "어느 한 환자의 치료를 전담하는 의사를 의미(3자)"
// 사전 재조합 , 가로 세로 따로 나열하기
const devideWords = () => {
  const { words } = CrossWordContents;
  const wordSet = {
    horizontal: [],
    vertical: [],
  };
  const blankSet = {
    horizontal: { allBlank: [] },
    vertical: { allBlank: [] },
  };

  words.map((wordObj) => {
    if (wordObj.direction === "horizontal") {
      wordSet.horizontal = [...wordSet.horizontal, wordObj];
      for (let i = 0; i < wordObj.word.length; i++) {
        blankSet.horizontal.allBlank = [
          ...blankSet.horizontal.allBlank,
          wordObj.position + i,
        ];
        if (blankSet.horizontal[wordObj.position])
          blankSet.horizontal[wordObj.position] = [
            ...blankSet.horizontal[wordObj.position],
            wordObj.position + i,
          ];
        else blankSet.horizontal[wordObj.position] = [wordObj.position];
      }
    }
    if (wordObj.direction === "vertical") {
      wordSet.vertical = [...wordSet.vertical, wordObj];
      for (let i = 0; i < wordObj.word.length; i++) {
        blankSet.vertical.allBlank = [
          ...blankSet.vertical.allBlank,
          wordObj.position + i * 6,
        ];
        if (blankSet.vertical[wordObj.position])
          blankSet.vertical[wordObj.position] = [
            ...blankSet.vertical[wordObj.position],
            wordObj.position + i * 6,
          ];
        else blankSet.vertical[wordObj.position] = [wordObj.position];
      }
    }
  });

  return { wordSet, blankSet };
};

export default devideWords;
