// React related imports
import React, { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";

// Component imports
import DrawerAfterLogin from "../components/DrawerAfterLogin";
import PortalDrawer from "../components/PortalDrawer";
import NavAfterLogin from "../components/NavAfterLogin";
import Games from "../components/Games";
import LineChart from "../components/LineChart";
import RadarChart from "../components/RadarChart";
import BarChart from "../components/BarChart";



const HomeAfterLogin: FunctionComponent = () => {
  const navigate = useNavigate();

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
      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-center justify-start gap-[87px] text-center text-11xl text-royalblue font-pc-h4">
        <div className="self-stretch flex flex-col items-center justify-start z-[1]">
          <div className="relative w-[1104px] h-[944px]">
            <div className="absolute top-[0px] left-[calc(50%_-_85px)] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[46px] font-extrabold">
                나의 지식 수준
              </div>
              <div className="relative bg-royalblue w-[170px] h-1" />
            </div>
            <img
              className="absolute top-[94px] left-[207px] w-[691px] h-80 object-cover"
              alt=""
              src="/frame-76-1@2x.png"
            />
            <div className="absolute top-[434px] left-[calc(50%_-_305px)] flex flex-row items-center justify-center gap-[17px] text-lg text-darkslategray">
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
            <div className="absolute top-[584px] left-[0px] w-[1104px] h-[360px] text-left text-5xl text-gray-300">
              <div className="absolute top-[0px] left-[0px] rounded-11xl w-[1104px] h-[360px]">
                <div className="absolute top-[0px] left-[60px] rounded-11xl bg-white shadow-[0px_30px_60px_rgba(68,_68,_68,_0.06)] w-[984px] h-[360px]" />
                <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white box-border w-[1104px] h-[360px] border-[2px] border-solid border-gray-300" />
              </div>
              <div className="absolute top-[0px] left-[30px] w-80 h-80 overflow-hidden flex flex-col items-center justify-end text-center text-gray-200">
                <div className="w-80 h-[290px] flex flex-col items-center justify-start gap-[20px]">
                  <div className="bg-whitesmoke-100 w-80 h-[236px] flex flex-col  box-border items-center justify-center">
                    <LineChart />
                  </div>
                  <div className="w-[118px] h-[34px] flex flex-row items-center justify-end gap-[10px] text-left text-gray-300">
                    <div className="relative leading-[34px] font-extrabold">
                      월간 분석
                    </div>
                    <img
                      className="relative w-[19px] h-[14.73px]"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[392px] w-80 h-80 overflow-hidden flex flex-col items-center justify-end">
                <div className="w-80 h-[290px] flex flex-col items-center justify-start gap-[20px]">
                  <div className="bg-whitesmoke-100 w-80 h-[236px] flex flex-col  box-border items-center justify-center">
                    <RadarChart />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[10px]">
                    <div className="relative leading-[34px] font-extrabold">
                      테마별 지식 점수
                    </div>
                    <img
                      className="relative w-[19px] h-[14.73px]"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[754px] w-80 h-80 overflow-hidden flex flex-col items-center justify-end">
                <div className="w-80 h-[290px] flex flex-col items-center justify-start gap-[20px]">
                  <div className="bg-whitesmoke-100 w-80 h-[236px] flex flex-col  box-border items-center justify-center">
                    <BarChart />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[10px]">
                    <div className="relative leading-[34px] font-extrabold">
                      나의 순위는?
                    </div>
                    <img
                      className="relative w-[19px] h-[14.73px]"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[370px] w-0.5 h-[266px] overflow-hidden flex flex-col items-center justify-end">
                <div className="relative bg-whitesmoke-200 w-0.5 h-[236px]" />
              </div>
              <div className="absolute top-[0px] left-[732px] w-0.5 h-[266px] overflow-hidden flex flex-col items-center justify-end">
                <div className="relative bg-whitesmoke-200 w-0.5 h-[236px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[2]">
          <div className="flex flex-col items-center justify-start gap-[60px]">
            <div className="flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[46px] font-extrabold">
                당신을 위한 게임 추천
              </div>
              <div className="relative bg-royalblue w-[255px] h-1" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[60px] text-left text-5xl text-indigo">
              <div className="relative bg-gainsboro w-[1104px] h-px" />
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
            </div>
          </div>
        </div>
        <Games />
        <div className="bg-white w-[1920px] h-[914px] flex flex-col py-[90px] px-[408px] box-border items-center justify-center gap-[14px] z-[4]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="relative leading-[46px] font-extrabold">
              뉴스 카테고리별 게임
            </div>
            <div className="relative bg-royalblue w-[248px] h-1" />
          </div>
          <div className="w-[1104px] h-[620px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[36px]">
            <div className="w-[344px] h-[620px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <button onClick={() => { window.location.href = "/category" }}
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board3@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button onClick={() => { window.location.href = "/category" }}
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board32@3x.png')] bg-cover bg-no-repeat bg-[top] mt-[-20px]" />
            </div>
            <div className="w-[344px] h-[620px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <button onClick={() => { window.location.href = "/category" }}
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board12@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button onClick={() => { window.location.href = "/category" }}
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board42@3x.png')] bg-cover bg-no-repeat bg-[top] mt-[-20px]" />
            </div>
            <button onClick={() => { window.location.href = "/category" }}
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board22@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          </div>
        </div>
        <div className="relative w-[1920px] h-[184px] z-[5] text-left text-base text-white">
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
        <div className="absolute my-0 mx-[!important] top-[743px] left-[408px] w-[1104px] h-[220px] hidden z-[6] text-left text-5xl">
          <div className="absolute top-[0px] left-[calc(50%_-_552px)] rounded-91xl bg-white box-border w-[1104px] flex flex-col items-center justify-center border-[2px] border-solid border-gray-300">
            <div className="relative rounded-91xl bg-white shadow-[0px_30px_60px_rgba(68,_68,_68,_0.06)] w-[984px] h-[220px]" />
          </div>
          <div className="absolute top-[60px] left-[313px] w-[479px] h-[90px] flex flex-col items-center justify-center gap-[10px]">
            <div className="relative leading-[34px] font-extrabold">
              나의 지식 수준
            </div>
            <div className="relative text-11xl leading-[46px] font-extrabold text-black text-center">
              당신은 호기심이 넘치는 박사님 이시네요!
            </div>
          </div>
          <div className="absolute top-[50px] left-[59px] w-[216px] h-[120px] flex flex-row items-center justify-start text-center text-15xl text-white">
            <img
              className="relative w-[206.4px] h-[120px] object-cover"
              alt=""
              src="/ico@2x.png"
            />
            <div className="relative w-20 h-20 ml-[-70px]">
              <div className="absolute top-[0px] left-[calc(50%_-_40px)] rounded-[50%] bg-black w-20 h-20 opacity-[0.9]" />
              <div className="absolute top-[21px] left-[calc(50%_-_21px)] font-extrabold inline-block w-[43px] h-[38px]">
                22
              </div>
            </div>
          </div>
          <img
            className="absolute top-[60px] left-[calc(50%_+_382px)] w-[100px] h-[100px]"
            alt=""
            src="/btnmymore.svg"
          />
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

export default HomeAfterLogin;
