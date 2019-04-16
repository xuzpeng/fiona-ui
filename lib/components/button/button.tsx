import React from 'react';
import PropTypes from 'prop-types';
import './botton.scss';
import combineClass from '../../helpers/combineClass';

interface IProps {
  type?: string;
  className?: string;
  style?: Object;
  onClick?: React.MouseEventHandler;
  children: string;
}

const Button: React.FunctionComponent<IProps> = (props) => {
  return (
    <button 
      style={props.style} 
      className={combineClass(`f-button f-button-${props.type}`, props.className)}
      onClick={props.onClick}  
    >
      {props.children}
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