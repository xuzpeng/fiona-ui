import React from 'react';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const prefix = PRC('f-layout');

const Header: React.FunctionComponent<IProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass(prefix('header'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Header;