import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './botton.scss';
import combineClass from '../../helpers/combineClass';

interface ButtonProps {
  type?: string;
  className?: string;
}

export default class Button extends Component<ButtonProps> {
  static propTypes: { 
    type: PropTypes.Requireable<string>; 
    className: PropTypes.Requireable<string>; 
  };
  static defaultProps: {};
  render() {
    return (
      <button className={combineClass(`f-button-${this.props.type}`, this.props.className)}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
}

Button.defaultProps = {
  type: 'default'
}