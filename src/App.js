import React, { Suspense } from "react";
import "./App.css";
import Loader from "Components/Loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import("Components/SideBar"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
