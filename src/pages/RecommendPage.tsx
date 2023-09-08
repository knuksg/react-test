import { FunctionComponent, useState, useCallback, useEffect } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import NavAfterLogin from "../components/NavAfterLogin";
import DrawerAfterLogin from "../components/DrawerAfterLogin";
import Footer from "../components/Footer";

const RecommendPage: FunctionComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMoreState, setShowMoreState] = useState(0);
  const [animateFirst, setAnimateFirst] = useState([false, false, false]);
  const [animateSecond, setAnimateSecond] = useState([false, false, false]);

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

      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-start justify-start text-left text-55xl text-gray-300 font-pc-h4">

        <div className="self-stretch flex flex-col items-center justify-start gap-[120px]">
          <div className="flex flex-col items-start justify-start relative gap-[10px]">
            <div className="relative bg-whitesmoke-300 w-[1920px] h-[500px] z-[0]" />
            <div className="my-0 mx-[!important] absolute top-[0px] left-[408px] flex flex-row items-center justify-start gap-[36px] z-[1]">
              <div className="flex flex-col items-start justify-start gap-[30px]">
                <div className="relative font-extrabold">
                  당신을 위한 게임 추천
                </div>
                <div className="relative text-5xl leading-[34px] font-extrabold">
                  <p className="m-0">{`새롭게 도전하고 싶지만 어떤 게임을 해야 할지 망설이는 `}</p>
                  <p className="m-0">당신을 위해 추천 드립니다.</p>
                </div>
              </div>
              <div className="relative w-[847px] h-[500px]">
                <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[847px] h-[500px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[60px] text-5xl text-indigo">
            <div className="relative w-[1104px] h-[390px]">
              <div className="absolute top-[0px] left-[0px] [text-decoration:underline] leading-[34px] font-extrabold">
                # 연합뉴스 에디터가 추천하는 오늘의 게임
              </div>
              <div className="absolute top-[64px] left-[0px] w-[1154px] h-[326px] overflow-hidden">
                <button onClick={() => { window.location.href = "/gamePage" }}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[760px] w-[344px] h-[326px] bg-[url('/public/listtype011@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button onClick={() => { window.location.href = "/gamePage" }}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[380px] w-[344px] h-[326px] bg-[url('/public/listtype0111@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button onClick={() => { window.location.href = "/gamePage" }}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[344px] h-[326px] bg-[url('/public/listtype0122@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="absolute top-[60px] left-[1094px] w-[60px] h-[60px]"
                  alt=""
                  src="/property-1default1.svg"
                />
              </div>
            </div>
            <div className="relative bg-gainsboro w-[1104px] h-px" />
            <div className="relative w-[1104px] h-[390px]">
              <div className="absolute top-[0px] left-[-50px] w-[474px] overflow-hidden flex flex-col items-end justify-center">
                <div className="relative [text-decoration:underline] leading-[34px] font-extrabold">
                  # 네이버로 로그인한 독자들을 위한 추천 게임
                </div>
              </div>
              <div className="absolute top-[64px] left-[-50px] w-[1154px] h-[326px] overflow-hidden">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[810px] w-[344px] h-[326px] bg-[url('/public/listtype0121@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[430px] w-[344px] h-[326px] bg-[url('/public/listtype01121@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[50px] w-[344px] h-[326px] bg-[url('/public/listtype01221@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="absolute top-[60px] left-[0px] w-[60px] h-[60px]"
                  alt=""
                  src="/property-1default.svg"
                />
              </div>
            </div>
            <div className="relative bg-gainsboro w-[1104px] h-px" />
            <div className="relative w-[1104px] h-[391px]">
              <div className="absolute top-[0px] left-[0px] [text-decoration:underline] leading-[34px] font-extrabold">
                # 방금 본 크로스워드 게임에 이어 하면 좋은 게임
              </div>
              <div className="absolute top-[64px] left-[0px] w-[1154px] h-[327px] overflow-hidden">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[760px] w-[344px] h-[326px] bg-[url('/public/listtype01221@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1px] left-[380px] w-[344px] h-[326px] bg-[url('/public/listtype01121@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1px] left-[0px] w-[344px] h-[326px] bg-[url('/public/listtype0121@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="absolute top-[61px] left-[1094px] w-[60px] h-[60px]"
                  alt=""
                  src="/property-1default1.svg"
                />
              </div>
            </div>
            <div className="relative bg-gainsboro w-[1104px] h-px" />
            <div className="relative w-[1104px] h-[390px]">
              <div className="absolute top-[0px] left-[-50px] w-[509px] overflow-hidden flex flex-col items-end justify-center">
                <div className="relative [text-decoration:underline] leading-[34px] font-extrabold">
                  # 최근 22시간 이내 많이 참여한 인기급상승 게임
                </div>
              </div>
              <div className="absolute top-[64px] left-[-50px] w-[1204px] h-[326px] overflow-hidden">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[810px] w-[344px] h-[326px] bg-[url('/public/listtype011@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[430px] w-[344px] h-[326px] bg-[url('/public/listtype0122@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[50px] w-[344px] h-[326px] bg-[url('/public/listtype0111@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="absolute top-[60px] left-[0px] w-[1204px] h-[60px]"
                  alt=""
                  src="/btnlrscroll.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-20 bg-[url('/public/btnlistmore11@3x.png')] bg-cover bg-no-repeat bg-[top]" />
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

export default RecommendPage;
