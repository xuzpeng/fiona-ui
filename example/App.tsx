import React, { Component } from 'react';
import CHeader from './components/CHeader';
import CNavLeft from './components/CNavLeft';
import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <CHeader />
        <main className="main-content">
          <div className="main-content-left">
            <CNavLeft/>
          </div>
          <div className="main-content-right">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}
