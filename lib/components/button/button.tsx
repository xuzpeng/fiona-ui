import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import './botton.scss';
import combineClass from '../../helpers/combineClass';
import { Icon } from '../../../lib';

interface IProps {
  type?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler;
  children: string;
  icon?: string;
  disabled?: boolean;
}

const Button: React.FunctionComponent<IProps> = (props) => {
  return (
    <button
      className={combineClass(`f-button f-button-${props.type}`, props.disabled  ? 'f-button-disabled' : 'f-button-ripple', props.className)}
      onClick={props.onClick}
      style={props.style}
    >
      {props.icon ? <Icon name={props.icon}/> : null}
      <span className={props.icon ? 'f-button-text' : ''}>
        {props.children}
      </span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
}

Button.defaultProps = {
  type: 'default'
}

export default Button;
