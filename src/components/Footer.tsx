const Footer: React.FC = () => {

    return (
        <footer className="relative w-[1920px] h-[184px] text-left text-base text-white font-pc-h4">
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
        </footer>
    );
};

export default Footer;
