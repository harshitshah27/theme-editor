import React, { Suspense } from "react";
import "./App.css";
import SideBar from "Components/SideBar";
import Loader from "Components/Loader";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={SideBar} />
      </Switch>
    </Suspense>
  );
}

export default App;
