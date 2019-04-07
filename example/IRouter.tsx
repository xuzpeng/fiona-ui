import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import App from './App';

interface IProps { }

interface IState { }

export default class IRouter extends Component<IProps, IState> {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
