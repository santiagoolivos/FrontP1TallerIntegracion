import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
