import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type DrawerAfterLoginType = {
  onClose?: () => void;
};

const DrawerAfterLogin: FunctionComponent<DrawerAfterLoginType> = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onBtnMLMClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBtnMLM1Click = useCallback(() => {
    navigate("/crossword");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/crossword");
  }, [navigate]);

  const onBtnMLM2Click = useCallback(() => {
    navigate("/newsQuiz");
  }, [navigate]);

  const onBtnMLM3Click = useCallback(() => {
    navigate("/vote");
  }, [navigate]);

  const onBtnMLM4Click = useCallback(() => {
    navigate("/problem");
  }, [navigate]);

  const onBtnMLM5Click = useCallback(() => {
    navigate("/recent");
  }, [navigate]);

  const onBtnMLM6Click = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  const onBtnMLM7Click = useCallback(() => {
    navigate("/reccomend");
  }, [navigate]);

  const onBtnMLM8Click = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBtnMLM9Click = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  const onBtnMLM10Click = useCallback(() => {
    navigate("/mylevel");
  }, [navigate]);

  const onBtnMLM11Click = useCallback(() => {
    navigate("/policy");
  }, [navigate]);

  const onBtnMLMLoginClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className="bg-white w-[360px] h-full overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%]"
      data-animate-on-scroll
    >
      <section className="absolute top-[92px] left-[20px] flex flex-col items-start justify-start">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLMClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            홈
          </b>
        </button>
        <div className="relative bg-gainsboro w-[322px] h-px" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM1Click}
        >
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white cursor-pointer"
            onClick={onRectangle2Click}
          />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            크로스 워드
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM2Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            뉴스 퀴즈
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM3Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            투표 게임
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM4Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            고민 해결소
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM5Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            최신 기사별 게임
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM6Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            테마별 게임
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM7Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            당신을 위한 게임 추천
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM8Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            FAQ
          </b>
        </button>
        <div className="relative bg-gainsboro w-[304px] h-px" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM9Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            마이 페이지
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM10Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            나의 지식수준
          </b>
        </button>
        <div className="relative bg-gainsboro w-[304px] h-px" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[322px] h-[46px]"
          onClick={onBtnMLM11Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
          <b className="absolute top-[calc(50%_-_12px)] left-[20px] text-sm leading-[24px] font-pc-h4 text-darkslategray text-left">
            개인정보보호정책
          </b>
        </button>
      </section>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute bottom-[0px] left-[0px] w-[360px] h-[60px]"
        onClick={onBtnMLMLoginClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-royalblue" />
        <button className="cursor-pointer p-0 bg-[transparent] absolute h-[66.67%] w-[94.44%] top-[16.67%] right-[2.78%] bottom-[16.67%] left-[2.78%] rounded-md box-border border-[1px] border-solid border-gray-400" />
        <div className="absolute h-[19%] w-[22.67%] top-[36%] left-[38.66%] text-mid font-extrabold font-pc-h4 text-white text-center inline-block">
          로그아웃
        </div>
      </button>
      <header className="absolute top-[24px] left-[0px] bg-white w-[360px] h-12">
        <img
          className="absolute top-[9px] left-[64px] w-[107.61px] h-[30px] object-cover"
          alt=""
          src="/logo1@2x.png"
        />
        <button
          className="cursor-pointer [border:none] py-0 px-[7px] bg-white absolute top-[8px] left-[20px] w-8 h-8 flex flex-col box-border items-start justify-center"
          onClick={onClose}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] bg-[url('/public/icoclose1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </button>
      </header>
    </div>
  );
};

export default DrawerAfterLogin;
