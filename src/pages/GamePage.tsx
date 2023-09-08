import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import DrawerAfterLogin from '../components/DrawerAfterLogin';
import PortalDrawer from '../components/PortalDrawer';
import NavAfterLogin from '../components/NavAfterLogin';
import Footer from '../components/Footer';
import Crossword from '../container/Crossword/Crossword';

const GamePage: FunctionComponent = () => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavAfterLogin isScrolled={isScrolled} openDrawer={openDrawer} />
      <div className="relative bg-white w-full top-[86px] overflow-hidden flex flex-col items-start justify-start gap-[72px] text-left text-25xl text-gray-200 font-mobile-m-btn1">
        <div className="flex flex-col items-center justify-start gap-[120px]">
          <div className="flex flex-col items-center justify-start gap-[40px]">
            <div className="relative w-[1920px] h-[127px]">
              <div className="absolute top-[126px] left-[0px] bg-gainsboro w-[1920px] h-px" />
              <div className="absolute top-[0px] left-[408px] leading-[60px] font-extrabold text-black">
                BTS 정국 빌보드 싱글 '핫 100' 30위…뷔 96위
              </div>
              <div className="absolute top-[70px] left-[408px] w-[215px] h-[26px] text-base">
                <div className="absolute top-[0px] left-[0px] leading-[26px]">
                  송고시간
                </div>
                <div className="absolute top-[0px] left-[77px] leading-[26px]">
                  2023-08-23 08:37
                </div>
                <div className="absolute top-[3px] left-[66px] bg-darkgray w-px h-2.5" />
              </div>
            </div>
            <div className="relative w-[1104px] h-[1479px] text-xl">
              <img
                className="absolute top-[0px] left-[calc(50%_-_552px)] w-[1104px] h-[735px] object-cover"
                alt=""
                src="/pyh2023071403840001300-p4-1@2x.png"
              />
              <div className="absolute top-[795px] left-[0px] leading-[36px] inline-block w-[1104px]">
                <p className="m-0 text-gray-300">
                  (서울=연합뉴스) 이태수 기자 = 그룹 방탄소년단(BTS) 정국의 공식
                  솔로 데뷔곡 '세븐'(Seven)이 미국 빌보드 메인 싱글 차트 '핫
                  100'에서 5주 연속 상위권 진입에 성공했다.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-gray-300">
                  22일(현지시간) 빌보드가 발표한 최신 차트에 따르면 '세븐'은
                  전주보다 두 계단 하락한 30위를 기록했다.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-gray-300">
                  또 다른 멤버 뷔는 다음 달 발매를 앞둔 첫 공식 솔로 앨범
                  '레이오버'(Layover)의 선공개곡 '러브 미 어게인'(Love Me
                  Again)으로 같은 차트 96위에 첫 진입했다.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-gray-300">
                  방탄소년단은 이로써 앞서 제이홉, 진, RM, 지민, 슈가, 정국에
                  이어 뷔까지 멤버 전원이 믹스테이프(비정규앨범) 혹은 OST 외에
                  공식 솔로곡으로도 '핫 100'에 진입하는 기록을 썼다.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-gray-300">
                  뷔는 앞서 지난해 SBS TV 드라마 '그 해 우리는' OST '크리스마스
                  트리'(Christmas Tree)로 '핫 100' 79위에 오른 바 있다.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-gray-300">
                  '러브 미 어게인'은 이 밖에 '월드 디지털 송 세일즈' 1위,
                  '디지털 송 세일즈' 3위, '글로벌'(미국 제외) 6위, '글로벌 200'
                  12위에 올랐다. 뷔의 또 다른 선공개곡 '레이니 데이즈'(Rainy
                  Days)는 '디지털 송 세일즈' 4위, '글로벌'(미국 제외) 8위,
                  '글로벌 200' 16위로 집계됐다.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-gray-300">
                  지민의 솔로 앨범 '페이스'(FACE) 타이틀곡 '라이크
                  크레이지'(Like Crazy)는 '월드 디지털 송 세일즈'에서 9위로
                  재진입했다. 또 '글로벌'(미국 제외) 31위, '글로벌 200' 53위로
                  역주행하며 21주 연속 차트인했다. '페이스'는 '월드 앨범'에서
                  8위를 기록했다.
                </p>
                <p className="m-0 text-gray-300">
                  슈가의 솔로 앨범 'D-데이'(D-DAY)는 '톱 커런트 앨범' 43위, '톱
                  앨범 세일즈' 67위로 17주 진입했다.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Crossword />
          </div>
        </div>
        <div className="relative w-[1920px] h-[184px] text-base text-white">
          <footer className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dimgray" />
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

export default GamePage;
