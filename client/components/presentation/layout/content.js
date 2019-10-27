import React from "react";
import { Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("../routeContent/home")),
  Pastries = React.lazy(() => import("../../containers/routeContent/pastries")),
  Services = React.lazy(() => import("../routeContent/services")),
  AdminLogin = React.lazy(() => import('../../containers/secretAdmin')),
  AdminPanel = React.lazy(() => import('../../containers/secretAdminPanel')),
  Page404 = React.lazy(() => import('../../misc/page404'));

const Content = () => {
  return (
    <main>
      <React.Suspense fallback={<span className="general-loader" />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pastries" component={Pastries} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/adminPanel" component={AdminPanel} />
          <Route exact component={Page404} />
        </Switch>
      </React.Suspense>
    </main>
  );
};

export default Content;
