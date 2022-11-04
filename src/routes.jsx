import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Ordenes from './views/Ordenes';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ordenes" component={Ordenes}/>
      <Route exact path="/bodegas-stocks" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}
