import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBeforeLogin from "../components/NavBeforeLogin";

const HomeBeforeLogin: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBtnLogin1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onBoard31Click = useCallback(() => {
    navigate("/crossword");
  }, [navigate]);

  return (
    <>
      <NavBeforeLogin />
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[60px] pt-[86px]">  {/* 여기에 pt-[86px] 추가 */}
        <main className="w-[1920px] overflow-hidden flex flex-col items-center justify-center gap-[120px] text-center text-11xl text-royalblue font-pc-h4">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center">
            <div className="w-[1547px] overflow-hidden flex flex-col items-center justify-start">
              <img
                className="relative w-[1547px] h-[466px] object-cover"
                alt=""
                src="/banner-main-1@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[10px] h-4 ml-[33px]">
                <div className="relative rounded-lg bg-darkslategray w-10 h-4" />
                <div className="relative rounded-lg bg-darkgray w-4 h-4" />
                <div className="relative rounded-lg bg-darkgray w-4 h-4" />
              </div>
            </div>
          </div>
          <section className="bg-oldlace w-[1920px] h-[1234px] flex flex-col py-[31px] px-[388px] box-border items-center justify-center gap-[27px] text-center text-11xl text-royalblue font-pc-h4">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[46px] font-extrabold">Games</div>
              <div className="relative bg-royalblue w-[99px] h-1" />
            </div>
            <div className="relative w-[1144px] h-[986px] overflow-hidden shrink-0">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[1144px] h-[472.5px] bg-[url('/public/board31@3x.png')] bg-cover bg-no-repeat bg-[top]"
                onClick={onBoard31Click}
              />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472.5px] left-[760px] w-96 h-[513.5px] bg-[url('/public/board1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472.5px] left-[380px] w-96 h-[513.5px] bg-[url('/public/board11@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472.5px] left-[0px] w-96 h-[513.5px] bg-[url('/public/board21@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            </div>
          </section>
          <div className="flex flex-col items-center justify-start gap-[60px]">
            <div className="flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[46px] font-extrabold">
                최신 기사별 게임
              </div>
              <div className="relative bg-royalblue w-[196px] h-1" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[60px]">
              <button onClick={() => { window.location.href = "/gamePage" }}
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/listtype022@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/listtype0212@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1104px] h-[180px] bg-[url('/public/listtype0222@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            </div>
          </div>
          <div className="w-[1920px] overflow-hidden flex flex-col items-center justify-start">
            <div className="bg-oldlace w-[1920px] h-[914px] flex flex-col py-[60px] px-[408px] box-border items-center justify-center gap-[44px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[46px] font-extrabold">
                  뉴스 카테고리별 게임
                </div>
                <div className="relative bg-royalblue w-[248px] h-1" />
              </div>
              <div className="w-[1104px] h-[620px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board3@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board12@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board22@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                </div>
                <div className="flex flex-row items-start justify-start gap-[36px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board32@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[344px] h-80 bg-[url('/public/board42@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                </div>
              </div>
            </div>
            <div className="w-[1920px] h-[792px] overflow-hidden shrink-0 flex flex-col items-center justify-start text-25xl text-gray-300">
              <div className="w-[1920px] h-[610px] flex flex-row py-[100.00732421875px] px-[526px] box-border items-start justify-start gap-[20px]">
                <img
                  className="relative w-[127px] h-[89.99px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
                <div className="w-[574px] h-[389.99px] overflow-hidden shrink-0 flex flex-col py-[0.00048828125px] px-0 box-border items-center justify-end">
                  <div className="w-[574px] h-[360px] flex flex-col items-center justify-start gap-[40px]">
                    <div className="relative leading-[60px] opacity-[0.9]">
                      <p className="m-0">즐겁게 게임을 하면서</p>
                      <p className="m-0 text-royalblue">
                        <span className="font-extrabold">나의 지식 수준</span>
                        <span className="font-pc-h4 text-gray-300">{`도 넓혀가는 `}</span>
                        <span className="font-extrabold font-pc-h4 text-royalblue">
                          게임즈
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="font-pc-h4 text-gray-300">{`간편하게 `}</span>
                        <span className="font-extrabold font-pc-h4 text-royalblue">
                          로그인
                        </span>
                        <span> 하시고</span>
                      </p>
                      <p className="m-0">나의 변화도 이루어 가세요.</p>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[260px] h-20 bg-[url('/public/btnlistmore-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  </div>
                </div>
                <img
                  className="relative w-[127px] h-[119.98px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame1.svg"
                />
              </div>
              <footer className="relative w-[1920px] h-[184px] mt-[-2px] text-left text-base text-white font-pc-h4">
                <footer className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dimgray" />
                <div className="absolute top-[21.74%] left-[21.25%] leading-[26px] uppercase whitespace-pre-wrap">
                  <p className="m-0">
                    연합뉴스 서울시 종로구 율곡로 2길 25 | 등록번호 문화, 나00009
                    | 등록일자 1980.12.29 | 발행일자 1980.12.29Tel. 02-398-3114
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    (C) Yonhapnews[대표이사] 성기홍[편집인] 강의영
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomeBeforeLogin;
