import React from 'react';
import './importIcons';
import './icon.scss';
import combineClass from '../../helpers/combineClass';

interface IProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg 
      className={combineClass('f-icon', className)} 
      {...restProps}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon;