import React, { Component, lazy, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

const routers = [
  {
    name: 'button',
    path: './pages/button/button.demo'
  },
  {
    name: 'icon',
    path: './pages/icon/icon.demo'
  },
  {
    name: 'dialog',
    path: './pages/dialog/dialog.demo'
  },
  {
    name: 'layout',
    path: './pages/layout/layout.demo'
  },
  {
    name: 'input',
    path: './pages/input/input.demo'
  },
  {
    name: 'breadcrumb',
    path: './pages/breadcrumb/breadcrumb.demo'
  },
  {
    name: 'pagination',
    path: './pages/pagination/pagination.example'
  },
  {
    name: 'form',
    path: './pages/form/form.demo'
  },
  {
    name: 'loading',
    path: './pages/loading/loading.demo'
  },
  {
    name: 'affix',
    path: './pages/affix/affix.example'
  }
];

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/components" component={({match}: any) => (
              <Switch>
                <Suspense fallback={<div>loading...</div>}>
                  {
                    routers.map(route => {
                      return <Route
                        key={route.name}
                        path={`${match.url}/${route.name}`}
                        component={lazy(() => import(`${route.path}`))}
                      />
                    })
                  }
                </Suspense>
              </Switch>
            )} />
            <Redirect to="/components/layout" />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
