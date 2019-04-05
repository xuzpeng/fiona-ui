import React from 'react';
import './importIcons';
import './icon.scss';
import combineClass from '../../helpers/combineClass';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
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