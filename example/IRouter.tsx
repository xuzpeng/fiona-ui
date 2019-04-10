import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/home';
import Button from './pages/button';
import Icon from './pages/icon';
import App from './App';

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/components" component={({match}: any) => (
              <Switch>
                <Route path={`${match.url}/button`} component={Button} />
                <Route path={`${match.url}/icon`} component={Icon} />
              </Switch>
            )} />
            <Redirect to="/components/button" />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
