import React, { ReactElement } from 'react';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';
import Aside from './aside';
import './layout.scss';
import { ReactNodeArray } from 'prop-types';

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const prefix = PRC('f-layout');

const Layout: React.FunctionComponent<IProps> = ({
  className,
  children,
  ...restProps
}) => {
  const hasAside = (children as ReactNodeArray).some(currentEle => {
    return (currentEle as ReactElement).type === Aside;
  });
  const hasAsideClass = hasAside ? prefix('has-aside') : '';
  return (
    <div className={combineClass(prefix(), className, hasAsideClass)} {...restProps}>
      {children}
    </div>
  )
}

export default Layout;