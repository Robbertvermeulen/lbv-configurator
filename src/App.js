import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepPage from "./pages/StepPage";
import OverviewPage from "./pages/OverviewPage";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main className="app-main">
          <Switch>
            <Route exact path="/">
              <StepPage></StepPage>
            </Route>
            <Route exact path="/step/:id">
              <StepPage></StepPage>
            </Route>
            <Route exact path="/overview">
              <OverviewPage></OverviewPage>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
