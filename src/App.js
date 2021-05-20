import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Logout from "./components/Logout/Logout";
import Nav from "./components/Nav/Nav";
import { restore } from "./store/actions/auth";

function App() {
  const disptach = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    disptach(restore());
  }, [disptach]);

  let output = (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth" component={Auth} />
    </Switch>
  );
  if (isAuthenticated) {
    output = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Nav />
      {output}
    </div>
  );
}

export default App;
