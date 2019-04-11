import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './botton.scss';
import combineClass from '../../helpers/combineClass';

interface FButtonProps {
  type?: string;
  className?: string;
}

export default class FButton extends Component<FButtonProps> {
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

FButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
}

FButton.defaultProps = {
  type: 'default'
}