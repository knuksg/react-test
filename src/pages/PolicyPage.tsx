import { FunctionComponent, useState, useCallback, useEffect } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import NavAfterLogin from "../components/NavAfterLogin";
import Footer from "../components/Footer";
import DrawerAfterLogin from "../components/DrawerAfterLogin";

const PolicyPage: FunctionComponent = () => {

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
      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-center justify-start gap-[191px] text-left text-lg text-gray-300 font-pc-h4">
        <div className="relative w-[1105px] h-[1347px]">
          <div className="absolute top-[0px] left-[calc(50%_-_106.5px)] flex flex-col items-start justify-start gap-[20px] text-center text-11xl text-royalblue">
            <div className="relative leading-[46px] font-extrabold">
              개인정보 처리방침
            </div>
            <div className="relative bg-royalblue w-[214px] h-1" />
          </div>
          <div className="absolute top-[117px] left-[1px] leading-[28px]">
            <p className="m-0">{`YTN 및 YTN 관계사(이하 "회사"라 합니다)가 취급하는 모든 개인정보는 개인정보 보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 수집·보유·처리되고 `}</p>
            <p className="m-0">있습니다.</p>
            <p className="m-0">{`회사는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보화 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리 `}</p>
            <p className="m-0">방침을 두고 있습니다.</p>
            <p className="m-0">{`특히, 개인정보를 처리하는 회사 소관 홈페이지의 경우 『개인정보 보호법』 제30조 제1항 및 동법 『시행령』 제31조 제1항의 규정에 의하여 해당 홈페이지에 `}</p>
            <p className="m-0">
              별도의 『개인정보처리방침』을 정하여 운영하고 있습니다.
            </p>
            <p className="m-0">{`회사는 개인정보처리방침을 변경하는 경우에는 시행의 시기, 변경된 내용을 정보주체가 쉽게 확인 할 수 있도록 변경 전·후를 비교하여 공개하도록 할 `}</p>
            <p className="m-0">예정입니다.</p>
            <p className="m-0">
              여기서 YTN 및 YTN 관계사라 함은 ㈜YTN, ㈜YTN 라디오, ㈜YTN dmb 등
              YTN이 자회사로 보유한 회사를 말합니다.
            </p>
          </div>
          <div className="absolute top-[429px] left-[1px] w-[1104px] h-[464px]">
            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-100 w-[1104px] h-[464px]" />
            <b className="absolute top-[40px] left-[40px] leading-[32px]">
              <p className="m-0">제1조 (개인정보의 처리 목적)</p>
              <p className="m-0">제2조 (개인정보 수집 항목 및 수집방법)</p>
              <p className="m-0">제3조 (개인정보 처리방안 및 보유기간)</p>
              <p className="m-0">제4조 (개인정보의 제3자 제공에 관한 사항)</p>
              <p className="m-0">제5조 (개인정보처리의 위탁에 관한 사항)</p>
              <p className="m-0">
                제6조 (정보주체의 권리‧의무 및 그 행사방법에 관한 사항)
              </p>
              <p className="m-0">
                제7조 (개인정보 자동수집 장치의 설치•운영 및 거부에 관한 사항)
              </p>
              <p className="m-0">제8조 (개인정보의 파기)</p>
              <p className="m-0">제9조 (개인정보의 안전성 확보 조치)</p>
              <p className="m-0">제10조 (개인정보 보호책임자 및 담당자)</p>
              <p className="m-0">제11조 (권익침해 구제방법)</p>
              <p className="m-0">제12조 (개인정보 처리방침의 변경)</p>
            </b>
          </div>
          <div className="absolute top-[953px] left-[1px] flex flex-col items-start justify-start gap-[20px]">
            <div className="relative text-5xl leading-[34px] font-extrabold">
              제1조 (개인정보의 처리 목적)
            </div>
            <div className="relative leading-[28px]">
              <p className="m-0">{`회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전에 동의를 `}</p>
              <p className="m-0">구할 예정입니다.</p>
            </div>
            <div className="flex flex-col py-0 px-2.5 items-start justify-start gap-[10px]">
              <div className="relative leading-[28px]">① 개인정보 수집목적</div>
              <div className="relative text-inherit leading-[28px] font-inherit">
                <ul className="m-0 pl-6">
                  <li className="mb-0">서비스 이용에 따른 본인식별</li>
                  <li className="mb-0">커뮤니티 서비스의 제공</li>
                  <li>기타 새로운 서비스 또는 이벤트 정보 제공</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-[1265px] left-[0px] flex flex-col items-start justify-start gap-[20px] text-5xl">
            <div className="relative leading-[34px] font-extrabold">
              제2조 (개인정보 수집 항목 및 수집방법)
            </div>
            <div className="relative text-lg leading-[28px]">
              회사는 회원가입, 원활한 고객상담, 각종 서비스 등 기본적인 서비스
              제공을 위해 아래와 같은 개인정보를 처리하고 있습니다.
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

export default PolicyPage;
