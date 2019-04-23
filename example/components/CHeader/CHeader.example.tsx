import React, { Component } from 'react';
import './CHeader.example.scss';
// @ts-ignore
import logo from '../../../assets/logo.png';

export default class CHeader extends Component {
  render() {
    return (
      <header className="common-header">
        <img src={logo} alt="" className="logo-pic"/>
        <h1 className="common-header-title">
          FIONA-UI
        </h1>
      </header>
    )
  }
}
