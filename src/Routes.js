import React from 'react';
import Router from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import AppLayout from './layout/main'
import Home from './components/Home'
import Danger from './components/Danger'


const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="*" component={Danger} /> {/* Always keep this last in the routes */}
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes