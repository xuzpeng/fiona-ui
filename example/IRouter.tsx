import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/home';
import Button from './pages/button/button.demo';
import Icon from './pages/icon/icon.demo';
import Dialog from './pages/dialog/dialog.demo';
import Layout from './pages/layout/layout.demo';
import Input from './pages/input/input.demo';
import Affix from './pages/affix/affix.example';
import Breadcrumb from './pages/breadcrumb/breadcrumb.example';
import Pagination from './pages/pagination/pagination.example';
import Form from './pages/form/form.example';
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
                <Route path={`${match.url}/dialog`} component={Dialog} />
                <Route path={`${match.url}/layout`} component={Layout} />
                <Route path={`${match.url}/input`} component={Input} />
                <Route path={`${match.url}/affix`} component={Affix} />
                <Route path={`${match.url}/breadcrumb`} component={Breadcrumb} />
                <Route path={`${match.url}/pagination`} component={Pagination} />
                <Route path={`${match.url}/form`} component={Form} />
              </Switch>
            )} />
            <Redirect to="/components/layout" />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
