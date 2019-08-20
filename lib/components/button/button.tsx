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
  disable?: boolean;
}

const Button: React.FunctionComponent<IProps> = ({
  type,
  className,
  icon,
  children,
  disable
}) => {
  return (
    <button
      className={combineClass(`f-button f-button-${type}`, className, disable ? 'f-button-disabled' : '')}
      disabled={disable}
    >
      <React.Fragment>
        {icon ? <Icon name={icon}/> : null}
      </React.Fragment>
      <span className={icon ? 'f-button-text' : ''}>
        {children}
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
