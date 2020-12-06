import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
