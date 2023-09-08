import { FunctionComponent, useState, useCallback, useEffect } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import NavAfterLogin from "../components/NavAfterLogin";
import Footer from "../components/Footer";
import DrawerAfterLogin from "../components/DrawerAfterLogin";

const MyPage: FunctionComponent = () => {
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
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="relative w-[1104px] h-[672px]">
            <div className="absolute top-[0px] left-[calc(50%_-_65px)] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[46px] font-extrabold">
                마이페이지
              </div>
              <div className="relative bg-royalblue w-[130px] h-1" />
            </div>
            <div className="absolute top-[117px] left-[0px] w-[1104px] h-[555px] text-left text-xl text-darkslategray">
              <div className="absolute top-[0px] left-[0px] w-[1104px] h-[555px]">
                <div className="absolute top-[0px] left-[60px] rounded-11xl bg-white shadow-[0px_30px_60px_rgba(68,_68,_68,_0.06)] w-[984px] h-[555px]" />
                <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white box-border w-[1104px] h-[555px] border-[2px] border-solid border-gray-300" />
              </div>
              <div className="absolute top-[20px] left-[2px] flex flex-col items-center justify-start gap-[104px]">
                <div className="relative bg-white w-[1024px] h-px" />
                <div className="relative bg-gainsboro w-[1024px] h-px" />
                <div className="relative bg-gainsboro w-[1024px] h-px" />
                <div className="relative bg-gainsboro w-[1024px] h-px" />
                <div className="relative bg-darkgray w-[1100px] h-px" />
              </div>
              <div className="absolute top-[53px] left-[60px] w-[190px] h-9">
                <div className="absolute top-[0px] left-[0px] leading-[36px]">
                  이름
                </div>
                <div className="absolute top-[0px] left-[138px] leading-[36px] text-gray-300">
                  홍길동
                </div>
              </div>
              <div className="absolute top-[154px] left-[60px] w-[274px] h-9">
                <div className="absolute top-[0px] left-[0px] leading-[36px]">
                  이메일
                </div>
                <div className="absolute top-[0px] left-[138px] leading-[36px] text-gray-300">
                  test@test.com
                </div>
              </div>
              <div className="absolute top-[255px] left-[60px] w-[308px] h-9">
                <div className="absolute top-[0px] left-[0px] leading-[36px]">
                  성별
                </div>
                <img
                  className="absolute top-[3px] left-[138px] w-[30px] h-[30px]"
                  alt=""
                  src="/property-1on.svg"
                />
                <div className="absolute top-[0px] left-[178px] leading-[36px]">
                  남성
                </div>
                <img
                  className="absolute top-[3px] left-[233px] w-[30px] h-[30px]"
                  alt=""
                  src="/btnradio-off.svg"
                />
                <div className="absolute top-[0px] left-[273px] leading-[36px]">
                  여성
                </div>
              </div>
              <div className="absolute top-[341px] left-[60px] w-[468px] h-[60px]">
                <div className="absolute top-[12px] left-[0px] leading-[36px]">
                  생년월일
                </div>
                <div className="absolute top-[0px] left-[138px] rounded-md bg-white box-border w-[330px] h-[60px] border-[1px] border-solid border-darkgray" />
                <div className="absolute top-[12px] left-[158px] leading-[36px] text-darkgray">
                  2000/12/31
                </div>
              </div>
              <div className="absolute top-[471px] left-[557px] rounded-11xl bg-royalblue w-40 flex flex-row py-[19px] px-[30px] box-border items-center justify-between text-center text-white">
                <div className="relative font-extrabold">변경</div>
              </div>
              <div className="absolute top-[471px] left-[387px] rounded-11xl bg-white box-border w-40 flex flex-row py-[19px] px-[30px] items-center justify-between text-center text-royalblue border-[1px] border-solid border-royalblue">
                <div className="relative font-extrabold">취소</div>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[107px] h-[22px]"
            onClick={() => { window.location.href = "/withdrawal" }}
          >
            <div className="absolute top-[0px] left-[0px] text-xl font-extrabold font-pc-h4 text-darkslategray text-right">
              회원탈퇴
            </div>
            <img
              className="absolute h-[66.94%] w-[17.76%] top-[16.53%] right-[-0.93%] bottom-[16.53%] left-[83.18%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/arrow-11.svg"
            />
          </button>
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

export default MyPage;
