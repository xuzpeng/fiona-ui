import React, { Component } from 'react';
import FButton from '../../../lib/components/button/button';
import './style.scss';

export default class Button extends Component {
  render() {
    return (
      <div>
        <FButton type="primary" className="fdfd">Primary</FButton>
        <FButton type="default">Default</FButton>
        <FButton type="dashed">dashed</FButton>
        <FButton type="danger">Danger</FButton>
      </div>
    )
  }
}
