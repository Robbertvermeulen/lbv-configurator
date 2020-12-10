import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main className="app-main">
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
