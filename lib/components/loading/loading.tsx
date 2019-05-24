import React, { Fragment } from 'react';
import './loading.scss';
import combineClass from '../../helpers/combineClass';


interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: string;
}

const Loading: React.FC<IProps> = (props) => {
  return (
    <div className={combineClass('f-loading', `f-loading-${props.name}`, `f-loading-${props.size}`, props.className)}>
      {
        props.name === 'spin' && (
          <Fragment>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </Fragment>
        )
      }
    </div>
  )
}

export default Loading;