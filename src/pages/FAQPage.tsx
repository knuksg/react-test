import { FunctionComponent, useState, useCallback, useEffect } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import NavAfterLogin from "../components/NavAfterLogin";
import DrawerAfterLogin from "../components/DrawerAfterLogin";
import Footer from "../components/Footer";

const FAQPage: FunctionComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <NavAfterLogin isScrolled={isScrolled} openDrawer={openDrawer} />

      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-start justify-start gap-[100px] text-center text-11xl text-royalblue font-pc-h4">

        <div className="overflow-hidden flex flex-col py-0 px-[408px] items-start justify-start">
          <div className="flex flex-col items-center justify-start gap-[47px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[46px] font-extrabold">
                Games FAQ
              </div>
              <div className="relative bg-royalblue w-[164px] h-1" />
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start text-left text-5xl text-gray-300">
              <div className="text-black flex flex-col pt-0 px-0 pb-[60px] items-center justify-start">
                <div className="relative bg-gainsboro w-[1104px] h-px" />
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-center gap-[10px]">
                  <div className="flex-1 overflow-hidden flex flex-col items-end justify-center">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                      <div className="bg-white flex flex-col py-[33px] px-[41px] items-start justify-start">
                        <div className="relative leading-[34px] font-extrabold">
                          Q
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start">
                        <div className="relative leading-[34px] font-extrabold ">
                          크로스워드 플레이 방법
                        </div>
                      </div>
                    </div>
                    <div className="relative text-lg leading-[28px] inline-block w-[880px]">
                      <p className="m-0">{`보통 칸은 검은색으로 칠해진 칸과 빈 칸으로 나뉘어 있고, 빈 칸에는 숫자들이 있다. `}</p>
                      <p className="m-0">{`이 격자와 함께 빈 칸에 해당하는 단어에 대한 문제가 주어진다. `}</p>
                      <p className="m-0">{`이 문제에 답이 되면서도 다른 답과도 단어의 철자가 맞도록 퀴즈를 풀어야 한다. 따라서 겹치는 단어들은 같은 글자를 포함한다. `}</p>
                      <p className="m-0">{`문제는 "가로 4번 문제", "세로 20번 문제"와 같은 식으로 되어 있다. 검은 칸은 단어를 구별하기 위한 막힘칸이다. `}</p>
                      <p className="m-0">
                        언어를 이용한 퍼즐인 만큼 당연히 문제로 출제된 언어에
                        대해 깊은 이해도와 높은 어휘력이 받쳐 줘야 제대로 즐길
                        수가 있다.
                      </p>
                    </div>
                  </div>
                  <img
                    className="relative w-[100px] h-[100px]"
                    alt=""
                    src="/icoopen.svg"
                  />
                </div>
                <div className="relative bg-gainsboro w-[1104px] h-px" />
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative bg-gainsboro w-[1104px] h-px" />
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="text-black flex-1 overflow-hidden flex flex-row py-px px-0 items-center justify-start gap-[20px]">
                    <div className="bg-white flex flex-col py-[33px] px-[41px] items-center justify-center">
                      <div className="relative leading-[34px] font-extrabold">
                        Q
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="relative leading-[34px] font-extrabold ">
                        뉴스 퀴즈 플레이 방법
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-10 px-[50px] bg-white flex flex-row items-center justify-start">
                    <img
                      className="relative w-[22.09px] h-[21.5px]"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </button>
                </div>
                <div className="relative bg-gainsboro w-[1104px] h-px" />
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative bg-gainsboro w-[1104px] h-px" />
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="text-black flex-1 overflow-hidden flex flex-row py-px px-0 items-center justify-start gap-[20px]">
                    <div className="bg-white flex flex-col py-[33px] px-[41px] items-center justify-center">
                      <div className="relative leading-[34px] font-extrabold">
                        Q
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="relative leading-[34px] font-extrabold">
                        투표 줄다리기 플레이 방법
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-10 px-[50px] bg-white flex flex-row items-center justify-start">
                    <img
                      className="relative w-[22.09px] h-[21.5px]"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </button>
                </div>
                <div className="relative bg-gainsboro w-[1104px] h-px" />
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative bg-gainsboro w-[1104px] h-px" />
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="text-black flex-1 overflow-hidden flex flex-row py-px px-0 items-center justify-start gap-[20px]">
                    <div className="bg-white flex flex-col py-[33px] px-[41px] items-center justify-center">
                      <div className="relative leading-[34px] font-extrabold">
                        Q
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="relative leading-[34px] font-extrabold">
                        고민 해결소 플레이 방법
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-10 px-[50px] bg-white flex flex-row items-center justify-start">
                    <img
                      className="relative w-[22.09px] h-[21.5px]"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </button>
                </div>
                <div className="relative bg-gainsboro w-[1104px] h-px" />
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative bg-gainsboro w-[1104px] h-px" />
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="text-black flex-1 overflow-hidden flex flex-row py-px px-0 items-center justify-start gap-[20px]">
                    <div className="bg-white flex flex-col py-[33px] px-[41px] items-center justify-center">
                      <div className="relative leading-[34px] font-extrabold">
                        Q
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="relative leading-[34px] font-extrabold">
                        회원가입이 필요한가요
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-10 px-[50px] bg-white flex flex-row items-center justify-start">
                    <img
                      className="relative w-[22.09px] h-[21.5px]"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </button>
                </div>
                <div className="relative bg-gainsboro w-[1104px] h-px" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawer}
        >
          <DrawerAfterLogin onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default FAQPage;
