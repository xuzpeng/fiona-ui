import React, { Component } from 'react';
import CHeader from './components/CHeader';
import CNavLeft from './components/CNavLeft';
import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <CHeader />
        <main>
          <CNavLeft />
          {this.props.children}
        </main>
      </div>
    )
  }
}
