import React, {ReactNode} from 'react';

export interface BreadcrumbItemProps {
  separator?: string;
  children: ReactNode;
  href?: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  return (
    <div className='f-bci-item'>
      {
        props.separator && <div className='f-bci-separator'>{props.separator}</div>
      }
      {
        props.hasOwnProperty('href') ?
          <a className='f-bci-item-child' href={props.href}>{props.children}</a> :
          <div className='f-bci-item-child'>{props.children}</div>
      }
    </div>
  )
};

export default BreadcrumbItem;