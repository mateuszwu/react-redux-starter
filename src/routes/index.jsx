import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from '../components';

const routes = (
  <div>
    <Route exact path="/" component={Layout}/>
  </div>
);

export default routes;
