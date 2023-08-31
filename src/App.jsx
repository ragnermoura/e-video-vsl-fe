import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./assets/global";
import Routes from "./routes";
import { SkeletonTheme } from "react-loading-skeleton";
import { AuthProvider } from "./context/authProvider";
export default function App() {
  return (
    <AuthProvider>

    {/* <SkeletonTheme baseColor="#e2e2e2" highlightColor="#7a7a7a"> */}

    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
    {/* </SkeletonTheme> */}
    </AuthProvider>
  );
}
