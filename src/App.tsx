import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { AppStyled, ContentPageStyled } from "./styles/globalStyles";
import About from "./pages/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <AppStyled>
      <Navbar />

      <ContentPageStyled>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ContentPageStyled>
      <Footer />
    </AppStyled>
  );
}

export default App;
