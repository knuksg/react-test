import { FunctionComponent, useState, useCallback, useEffect } from "react";
import DrawerAfterLogin from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";
import NavAfterLogin from "../components/NavAfterLogin";

const ProblemPage: FunctionComponent = () => {
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
      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-center justify-start gap-[87px] text-center text-11xl text-royalblue font-pc-h4">
        <div className="self-stretch flex flex-col items-center justify-start z-[1]">
          <img
            className="relative w-[1920px] h-[480px] object-cover"
            alt=""
            src="/top-page2-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[60px]">
            <button onClick={() => { window.location.href = "/gamePage" }}
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1041@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1061@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1081@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1041@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1061@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1081@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            {showMoreState >= 1 && (
              <>
                <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1041@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateFirst[0] ? 'visible' : ''}`} />
                <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1061@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateFirst[1] ? 'visible' : ''}`} />
                <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1081@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateFirst[2] ? 'visible' : ''}`} />
              </>
            )}
            {showMoreState >= 2 && (
              <>
                <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1041@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateSecond[0] ? 'visible' : ''}`} />
                <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1061@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateSecond[1] ? 'visible' : ''}`} />
                <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/frame1081@3x.png')] bg-cover bg-no-repeat bg-[top] fadeIn ${animateSecond[2] ? 'visible' : ''}`} />
              </>
            )}
            {showMoreState < 2 && (
              <button onClick={() => setShowMoreState(showMoreState + 1)} className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-20 bg-[url('/public/btnlistmore11@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            )}
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

export default ProblemPage;
