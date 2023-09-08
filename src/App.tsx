import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeBeforeLogin from "./pages/HomeBeforeLogin";
import CategoryPage from "./pages/CategoryPage";
import ProblemPage from "./pages/ProblemPage";
import VotePage from "./pages/VotePage";
import NewsQuizPage from "./pages/NewsQuizPage";
import SocialLogin from "./pages/SocialLogin";
import HomeAfterLogin from "./pages/HomeAfterLogin";
import CrosswordPage from "./pages/CrosswordPage";
import RecentPage from "./pages/RecentPage";
import { useEffect } from "react";
import GamePage from "./pages/GamePage";
import RecommendPage from "./pages/RecommendPage";
import FAQPage from "./pages/FAQPage";
import MyPage from "./pages/MyPage";
import WithdrawalPage from "./pages/WithdrawalPage";
import MyLevelPage from "./pages/MyLevelPage";
import PolicyPage from "./pages/PolicyPage";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/category":
        title = "";
        metaDescription = "";
        break;
      case "/problem":
        title = "";
        metaDescription = "";
        break;
      case "/vote":
        title = "";
        metaDescription = "";
        break;
      case "/newsQuiz":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/crossword":
        title = "";
        metaDescription = "";
        break;
      case "/recent":
        title = "";
        metaDescription = "";
        break;
      case "/reccomend":
        title = "";
        metaDescription = "";
        break;
      case "/reactreact":
        title = "";
        metaDescription = "";
        break;
      case "/mylevel":
        title = "";
        metaDescription = "";
        break;
      case "/mypage":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawal":
        title = "";
        metaDescription = "";
        break;
      case "/policy":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeBeforeLogin />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/problem" element={<ProblemPage />} />
      <Route path="/vote" element={<VotePage />} />
      <Route path="/newsQuiz" element={<NewsQuizPage />} />
      <Route path="/login" element={<SocialLogin />} />
      <Route path="/home" element={<HomeAfterLogin />} />
      <Route path="/crossword" element={<CrosswordPage />} />
      <Route path="/recent" element={<RecentPage />} />
      <Route path="/reccomend" element={<RecommendPage />} />
      <Route path="/mylevel" element={<MyLevelPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/withdrawal" element={<WithdrawalPage />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/gamePage" element={<GamePage />} />
    </Routes>
  );
}
export default App;
