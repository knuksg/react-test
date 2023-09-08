import { FunctionComponent, useState, useCallback, useEffect } from "react";
import DrawerAfterLogin from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import NavAfterLogin from "../components/NavAfterLogin";
import Footer from "../components/Footer";

const RecentPage: FunctionComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMoreState, setShowMoreState] = useState(0);
  const [animateFirst, setAnimateFirst] = useState([false, false, false]);
  const [animateSecond, setAnimateSecond] = useState([false, false, false]);
  const [activeTab, setActiveTab] = useState('recent');

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

  useEffect(() => {
    if (showMoreState === 1) {
      setTimeout(() => setAnimateFirst([true, false, false]), 100);
      setTimeout(() => setAnimateFirst([true, true, false]), 300);
      setTimeout(() => setAnimateFirst([true, true, true]), 500);
    } else if (showMoreState === 2) {
      setTimeout(() => setAnimateSecond([true, false, false]), 100);
      setTimeout(() => setAnimateSecond([true, true, false]), 300);
      setTimeout(() => setAnimateSecond([true, true, true]), 500);
    }
  }, [showMoreState]);


  return (
    <>
      <NavAfterLogin isScrolled={isScrolled} openDrawer={openDrawer} />
      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-start justify-start text-left text-55xl text-gray-200 font-pc-h4">
        <div className="flex flex-col items-center justify-start gap-[200px]">
          <div className="flex flex-col items-end justify-start relative">
            <div className="relative bg-whitesmoke-300 w-[1920px] h-[420px] z-[0]" />
            <div className="my-0 mx-[!important] absolute top-[0px] left-[408px] flex flex-row items-end justify-start gap-[154px] z-[1]">
              <div className="flex flex-col items-start justify-start gap-[160px]">
                <div className="flex flex-col items-start justify-start gap-[30px]">
                  <h1 className="m-0 relative text-inherit font-extrabold" style={{ color: "black" }}>
                    최신 기사별 게임
                  </h1>
                  <div className="relative text-5xl leading-[34px] font-extrabold text-darkslategray">
                    <p className="m-0">지금 업데이트 기사와 연계된 최신 게임에 도전 하세요.</p>
                    <p className="m-0">나의 지적 즐거움이 새롭게 채워 집니다.</p>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <button onClick={() => setActiveTab('recent')}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[14px]">
                    <div className={`relative text-xl font-extrabold font-pc-h4 text-center ${activeTab === 'recent' ? 'text-royalblue' : 'text-gray-200'}`}>     최신 기사
                    </div>
                    <div className={`w-[120px] h-1 ${activeTab === 'recent' ? 'bg-royalblue ' : 'bg-gainsboro'}`} />
                  </button>
                  <button onClick={() => setActiveTab('previous')}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[14px]">
                    <div className={`relative text-xl font-extrabold font-pc-h4 text-center ${activeTab === 'previous' ? 'text-royalblue' : 'text-gray-200'}`}>
                      이전 기사
                    </div>
                    <div className={`w-[120px] h-1 ${activeTab === 'previous' ? 'bg-royalblue ' : 'bg-gainsboro'}`} />
                  </button>
                </div>
              </div>
              <img
                className="relative w-[847px] h-[500px] object-cover"
                alt=""
                src="/mask-group1@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[104px]">
            <div className="w-[1920px] flex flex-col items-center justify-start gap-[60px]">
              <button onClick={() => { window.location.href = "/gamePage" }}
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1201@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1211@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1221@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1201@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1211@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1221@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              {showMoreState >= 1 && (
                <>
                  <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1201@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateFirst[0] ? 'visible' : ''}`} />
                  <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1211@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateFirst[1] ? 'visible' : ''}`} />
                  <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1221@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateFirst[2] ? 'visible' : ''}`} />
                </>
              )}
              {showMoreState >= 2 && (
                <>
                  <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1201@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateSecond[0] ? 'visible' : ''}`} />
                  <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1211@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateSecond[1] ? 'visible' : ''}`} />
                  <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1221@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateSecond[2] ? 'visible' : ''}`} />
                </>
              )}
              {showMoreState < 2 && (
                <button onClick={() => setShowMoreState(showMoreState + 1)} className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-20 bg-[url('/public/btnlistmore11@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              )}
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

export default RecentPage;
