import React, { FunctionComponent } from "react";

interface NavProps {
    isScrolled: boolean;
    openDrawer: () => void;
}

const NavAfterLogin: FunctionComponent<NavProps> = ({ isScrolled, openDrawer }) => {
    return (
        <nav className="self-stretch bg-white w-full h-[86px] fixed top-0  z-10">
            <div className="h-full z-[1] flex flex-row items-center justify-start gap-[20px] px-[20px]">
                <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent]  w-12 h-12 bg-[url('/public/group201@3x.png')] bg-cover bg-no-repeat bg-[top]"
                    onClick={openDrawer}
                />
                <img
                    className=" w-[165px] h-[46px] object-cover"
                    alt=""
                    src="/logo@2x.png"
                />
            </div>
            {isScrolled && (
                <div className="absolute bottom-[0px] left-[0px] bg-gainsboro w-[1920px] h-px" />
            )}
        </nav>
    );
};

export default NavAfterLogin;
