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
  const lastIdx = props.children.length - 1;
  return (
    <div>
      <div className='f-bci'>
        {
          props.children.map((v: ReactElement, index: number) => {
            return React.cloneElement(v, {
              key: index,
              separator: index === lastIdx ? null : (props.separator || '/')
            })
          })
        }
      </div>
    </div>
  )
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;