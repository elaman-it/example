import { Route, Switch } from "react-router";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  let output = (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth" component={Auth} />
    </Switch>
  );

  return (
    <div className="App">
      <Nav />
      {output}
    </div>
  );
}

export default App;
