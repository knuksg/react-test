import { FunctionComponent, useState, useCallback, useEffect } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import NavAfterLogin from "../components/NavAfterLogin";
import Footer from "../components/Footer";
import DrawerAfterLogin from "../components/DrawerAfterLogin";

const WithdrawalPage: FunctionComponent = () => {
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
        <div className="relative w-[1104px] h-[677px]">
          <div className="absolute top-[0px] left-[calc(50%_-_52px)] flex flex-col items-start justify-start gap-[20px]">
            <div className="relative leading-[46px] font-extrabold">
              회원탈퇴
            </div>
            <div className="relative bg-royalblue w-[104px] h-1" />
          </div>
          <div className="absolute top-[117px] left-[0px] w-[1104px] h-[560px] text-xl text-gray-300">
            <div className="absolute top-[0px] left-[0px] w-[1104px] h-[560px]">
              <div className="absolute top-[0px] left-[60px] rounded-11xl bg-white shadow-[0px_30px_60px_rgba(68,_68,_68,_0.06)] w-[984px] h-[560px]" />
              <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white box-border w-[1104px] h-[560px] border-[2px] border-solid border-gray-300" />
              <div className="absolute top-[438px] left-[calc(50%_-_550px)] bg-darkgray w-[1100px] h-px" />
            </div>
            <div className="absolute top-[20px] left-[calc(50%_-_550px)] w-[1100px] h-[419px] hidden">
              <div className="absolute top-[0px] left-[calc(50%_-_512px)] bg-white w-[1024px] h-px" />
              <div className="absolute top-[101px] left-[calc(50%_-_512px)] bg-gainsboro w-[1024px] h-px" />
              <div className="absolute top-[202px] left-[calc(50%_-_512px)] bg-gainsboro w-[1024px] h-px" />
              <div className="absolute top-[303px] left-[calc(50%_-_512px)] bg-gainsboro w-[1024px] h-px" />
              <div className="absolute top-[418px] left-[calc(50%_-_550px)] bg-darkgray w-[1100px] h-px" />
            </div>
            <div className="absolute top-[120px] left-[264px] w-[577px] h-[106px] text-25xl">
              <div className="absolute top-[0px] left-[0px] leading-[60px] font-extrabold">
                게임즈 회원을 탈퇴하시겠습니까?
              </div>
              <div className="absolute top-[70px] left-[27px] text-xl leading-[36px]">
                탈퇴하시면 게임즈의 모든 기록이 삭제되어 다시 복구되지 않습니다.
              </div>
            </div>
            <div className="absolute top-[286px] left-[347px] w-[410px] h-9 text-left text-darkslategray">
              <div className="absolute top-[0px] left-[40px] leading-[36px]">
                위 내용을 확인하였으며, 탈퇴를 진행하겠습니다
              </div>
              <div className="absolute top-[3px] left-[0px] w-[30px] h-[30px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-royalblue" />
                <img
                  className="absolute h-[51.06%] w-[71.07%] top-[25.61%] right-[13.31%] bottom-[23.33%] left-[15.61%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-8-stroke1.svg"
                />
              </div>
            </div>
            <div className="absolute top-[469px] left-[557px] rounded-11xl bg-royalblue w-40 flex flex-row py-[19px] px-[30px] box-border items-center justify-between text-white">
              <div className="relative font-extrabold">회원탈퇴</div>
            </div>
            <button
              className="cursor-pointer py-[19px] px-[30px] bg-white absolute top-[469px] left-[387px] rounded-11xl box-border w-40 flex flex-row items-center justify-between border-[1px] border-solid border-royalblue"
              onClick={() => { window.location.href = "/mypage" }}
            >
              <div className="relative text-xl font-extrabold font-pc-h4 text-royalblue text-center">
                취소
              </div>
            </button>
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

export default WithdrawalPage;
