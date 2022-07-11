import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { NavigationRoutes } from "./router";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavigationRoutes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
