import React from "react";
import { Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("../routeContent/home")),
  Pastries = React.lazy(() => import("../../containers/routeContent/pastries")),
  Services = React.lazy(() => import("../routeContent/services"));

const Content = () => {
  return (
    <main>
      <React.Suspense fallback={<p>loading component....</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pastries" component={Pastries} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </React.Suspense>
    </main>
  );
};

export default Content;
