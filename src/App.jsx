import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./assets/global";
import Routes from "./routes";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}
