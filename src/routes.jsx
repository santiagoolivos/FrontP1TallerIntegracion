import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Ordenes from './views/Ordenes';
import Facturas from './views/Facturas';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ordenes" component={Ordenes}/>
      <Route exact path="/bodegas-stocks" component={Home}/>
      <Route exact path="/facturas" component={Facturas}/>
      <Route component={NotFound} />
    </Switch>
  );
}
