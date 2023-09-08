import { FunctionComponent, useState, useCallback, useEffect } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import NavAfterLogin from "../components/NavAfterLogin";
import DrawerAfterLogin from "../components/DrawerAfterLogin";
import Footer from "../components/Footer";
import LineChart from "../components/LineChart";
import RadarChart from "../components/RadarChart";
import BarChart from "../components/BarChart";

const MyLevelPage: FunctionComponent = () => {
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
      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-center justify-start gap-[129px] text-center text-11xl text-royalblue font-pc-h4">
        <div className="self-stretch flex flex-col items-center justify-start gap-[120px]">
          <div className="w-[688px] h-[580px] flex flex-col items-center justify-start gap-[20px]">
            <div className="w-[688px] h-[470px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[80px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[46px] font-extrabold ">
                  나의 지식 수준
                </div>
                <div className="relative bg-royalblue w-[170px] h-1" />
              </div>
              <div className="w-[688px] h-80 overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[60px] text-25xl text-gray-300">
                <img
                  className="relative w-[344px] h-[200px] object-cover"
                  alt=""
                  src="/ico1@2x.png"
                />
                <div className="relative leading-[60px] font-extrabold text-black">
                  새로운 관점으로 세상을 바라보는 탐험가
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[17px] text-lg text-darkslategray">
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[28px]">전문가 레벨</div>
                <div className="relative bg-white w-[180px] h-0.5" />
                <div className="relative text-25xl leading-[60px] font-extrabold text-indianred">
                  22
                </div>
              </div>
              <div className="relative bg-gainsboro w-px h-[90px]" />
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[28px]">참여</div>
                <div className="relative bg-white w-[180px] h-0.5" />
                <div className="relative text-25xl leading-[60px] font-extrabold text-indianred">
                  203
                </div>
              </div>
              <div className="relative bg-gainsboro w-px h-[90px]" />
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[28px]">포인트</div>
                <div className="relative bg-white w-[180px] h-0.5" />
                <div className="relative text-25xl leading-[60px] font-extrabold text-indianred">
                  10,900
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1104px] overflow-hidden flex flex-col items-center justify-start gap-[120px]">
            <div className="self-stretch h-[601px] flex flex-col items-center justify-center gap-[47px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[46px] font-extrabold">
                  월간 분석 차트
                </div>
                <div className="relative bg-royalblue w-[170px] h-1" />
              </div>
              <div className="rounded-11xl bg-gray-100 box-border w-[1104px] h-[484px] flex flex-col py-0  items-center justify-center text-25xl text-gray-200 border-[1px] border-solid border-gray-200">
                <LineChart width="300%" height="100%" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[47px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[46px] font-extrabold">
                  테마별 지식 전수
                </div>
                <div className="relative bg-royalblue w-[196px] h-1" />
              </div>
              <div className="self-stretch rounded-11xl bg-gray-100 box-border h-[484px] flex flex-col  items-center justify-center text-25xl text-gray-200 border-[1px] border-solid border-gray-200">
                <RadarChart width="200%" height="100%" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[47px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[46px] font-extrabold">
                  나의 지식 순위
                </div>
                <div className="relative bg-royalblue w-[196px] h-1" />
              </div>
              <div className="self-stretch rounded-11xl bg-gray-100 box-border h-[484px] flex flex-col  items-center justify-center text-25xl text-gray-200 border-[1px] border-solid border-gray-200">
                <BarChart width="300%" height="100%" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
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

export default MyLevelPage;
