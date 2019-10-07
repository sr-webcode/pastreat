import React from 'react'
//import your route content components from the routeContent Folder and add them on a lazy way!!!
//import your route content components from the routeContent Folder and add them on a lazy way!!!

//arranged the folder tomorrow,, to move every component here (( well not all ,, but those that requires redux to be put in the containers folder coz they're smart components!))


import Home from '../routeContent/home'

import { Route, Switch } from 'react-router-dom'


const Content = () => {
  return (
    <main >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pastries" component={() => <h2>hello pastries</h2>} />
        <Route exact path="/services" component={() => <h2>hello services</h2>} />
      </Switch>
    </main>
  );
};

export default Content;
