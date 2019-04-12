import React, { Component } from 'react';
import CHeader from './components/CHeader/CHeader.example';
import CNavLeft from './components/CNavLeft/CNavLeft.example';
import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <CHeader />
        <main className="main-content">
          <CNavLeft/>
          <div className="main-content-right">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}
