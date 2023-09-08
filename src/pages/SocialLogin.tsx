import { FunctionComponent, useState, useCallback } from "react";
import REACTREACT3 from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import NavDefalut from "../components/NavDefault";

const SocialLogin: FunctionComponent = () => {
  const [isREACTREACTOpen, setREACTREACTOpen] = useState(false);
  const navigate = useNavigate();

  const openREACTREACT = useCallback(() => {
    setREACTREACTOpen(true);
  }, []);

  const closeREACTREACT = useCallback(() => {
    setREACTREACTOpen(false);
  }, []);

  const onGroup211Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroup221Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroup231Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroup241Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <NavDefalut />
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[203px] text-center text-xl text-darkslategray font-pc-h4">

        <div className="relative w-[644px] h-[589px]">
          <div className="absolute top-[169px] left-[21px] flex flex-col items-start justify-start gap-[20px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[600px] h-[90px] bg-[url('/public/group211@3x.png')] bg-cover bg-no-repeat bg-[top]"
              onClick={onGroup211Click}
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[600px] h-[90px] bg-[url('/public/group221@3x.png')] bg-cover bg-no-repeat bg-[top]"
              onClick={onGroup221Click}
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[600px] h-[90px] bg-[url('/public/group231@3x.png')] bg-cover bg-no-repeat bg-[top]"
              onClick={onGroup231Click}
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[600px] h-[90px] bg-[url('/public/group241@3x.png')] bg-cover bg-no-repeat bg-[top]"
              onClick={onGroup241Click}
            />
          </div>
          <div className="absolute top-[87px] left-[0px] leading-[36px]">
            지속적인 뉴스와 함께 게임을 즐기기 위해선 SNS를 통한 소셜 로그인이
            필요합니다.
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_69px)] flex flex-col items-start justify-start gap-[20px] text-11xl text-royalblue">
            <div className="relative leading-[46px] font-extrabold">
              소셜 로그인
            </div>
            <div className="relative bg-royalblue w-[137px] h-1" />
          </div>
        </div>
        <div className="relative w-[1920px] h-[184px] text-left text-base text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dimgray" />
          <div className="absolute top-[21.74%] left-[21.25%] leading-[26px] uppercase whitespace-pre-wrap">
            <p className="m-0">
              연합뉴스 서울시 종로구 율곡로 2길 25 | 등록번호 문화, 나00009 |
              등록일자 1980.12.29 | 발행일자 1980.12.29Tel. 02-398-3114
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              (C) Yonhapnews[대표이사] 성기홍[편집인] 강의영
            </p>
          </div>
        </div>
      </div>
      {isREACTREACTOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeREACTREACT}
        >
          <REACTREACT3 onClose={closeREACTREACT} />
        </PortalDrawer>
      )}
    </>
  );
};

export default SocialLogin;
