import React from 'react';

interface IProps {
  separator: string;
}

const BreadcrumbItem: React.FC<IProps> = (props) => {
  return (
    <div className='f-bci-item'>
      {
        props.separator && <div className='f-bci-separator'>{props.separator}</div>
      }
      <div>{props.children}</div>
    </div>
  )
};

export default BreadcrumbItem;