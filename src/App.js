import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ConfigProvider } from "./context/ConfigContext";
import { getFirstStep } from "./util/helpers";
import StepView from "./views/StepView";
import OverviewView from "./views/OverviewView";

const App = () => {
  const firstStep = getFirstStep();
  return (
    <Router>
      <ConfigProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={StepView}>
              <Redirect to={`/step/${firstStep.slug}`} />
            </Route>
            <Route exact path="/step/:slug" component={StepView} />
            <Route exact path="/overview" component={OverviewView} />
          </Switch>
        </div>
      </ConfigProvider>
    </Router>
  );
};

export default App;
