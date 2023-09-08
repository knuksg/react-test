import { useEffect, useState } from "react";

const useTimer = ({ setIsOver, action, isSuccess }) => {
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const id = setInterval(() => {
      if (action === "Play" && !isSuccess) setTimer(timer - 1);
    }, 1000);
    // 0 이 되면 카운트 멈춤
    if (timer === 0) {
      clearInterval(id);
      setIsOver(true);
    }
    return () => clearInterval(id);
  }, [timer, action, isSuccess]);

  return { timer };
};

export default useTimer;
