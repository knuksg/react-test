import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Games: React.FC = () => {
    const navigate = useNavigate();

    const onCrosswordClick = useCallback(() => {
        navigate("/crossword");
    }, [navigate]);

    const onNewsQuizClick = useCallback(() => {
        navigate("/newsQuiz");
    }, [navigate]);

    const onVoteClick = useCallback(() => {
        navigate("/vote");
    }, [navigate]);

    const onProblemClick = useCallback(() => {
        navigate("/problem");
    }, [navigate]);

    return (
        <section className="bg-oldlace w-[1920px] h-[1234px] flex flex-col py-[31px] px-[388px] box-border items-center justify-center gap-[27px] z-[3] text-center text-11xl text-royalblue font-pc-h4">
            <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[46px] font-extrabold">Games</div>
                <div className="relative bg-royalblue w-[99px] h-1" />
            </div>
            <div className="relative w-[1144px] h-[986px] overflow-hidden shrink-0">
                <button onClick={onCrosswordClick}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[1144px] h-[472.5px] bg-[url('/public/board31@3x.png')] bg-cover bg-no-repeat bg-[top]"
                />
                <button onClick={onNewsQuizClick}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472.5px] left-[760px] w-96 h-[513.5px] bg-[url('/public/board1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button onClick={onVoteClick}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472.5px] left-[380px] w-96 h-[513.5px] bg-[url('/public/board11@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <button onClick={onProblemClick}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472.5px] left-[0px] w-96 h-[513.5px] bg-[url('/public/board21@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            </div>
        </section>
    );
};

export default Games;


