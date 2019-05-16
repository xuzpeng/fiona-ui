import React, {ReactNode} from 'react';

interface IProps {
  separator: string;
  children: ReactNode;
}

const BreadcrumbItem: React.FC<IProps> = (props) => {
  return (
    <div className='f-bci-item'>
      {
        props.separator && <div className='f-bci-separator'>{props.separator}</div>
      }
      <div className='f-bci-item-child'>{props.children}</div>
    </div>
  )
};

export default BreadcrumbItem;