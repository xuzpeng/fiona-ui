import React, {ReactElement} from 'react';
import BreadcrumbItem, {BreadcrumbItemProps} from './breadcrumbItem';
import './breadcrumb.scss';

interface IProps {
  children: ReactElement[];
  separator?: string;
}

interface BreadcrumbType<T> {
  (props: T): ReactElement;
  Item: React.FC<BreadcrumbItemProps>;
}

const Breadcrumb: BreadcrumbType<IProps> = (props) => {
  return (
    <div>
      <div className='f-bci'>
        {
          props.children.map((v: ReactElement, index: number) => {
            return React.cloneElement(v, {
              key: index,
              separator: index === 0 ? null : (props.separator || '/')
            })
          })
        }
      </div>
    </div>
  )
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;