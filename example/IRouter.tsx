import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/home';
import Button from './pages/button';
import Icon from './pages/icon';
import App from './App';

interface IProps { }

interface IState { }

export default class IRouter extends Component<IProps, IState> {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/components" component={({match}: any) => (
              <Switch>
                <Route path={`${match.url}/button`} component={Button} />
                <Route path={`${match.url}/icon`} component={Icon} />
              </Switch>
            )} />
            <Route exact path="/" render={() => (<Redirect to="/components/button" />)} /> 
            {/* <Redirect to="/components/button" /> */}
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
