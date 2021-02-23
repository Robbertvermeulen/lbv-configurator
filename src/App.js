import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepPage from "./pages/StepPage";
import OverviewPage from "./pages/OverviewPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={StepPage} />
          <Route exact path="/step/:slug" component={StepPage} />
          <Route exact path="/overview" component={OverviewPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
