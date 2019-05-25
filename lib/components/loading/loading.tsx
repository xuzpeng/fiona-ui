import React, { Fragment } from 'react';
import './loading.scss';
import combineClass from '../../helpers/combineClass';


interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: string;
  message?: string;
}

const Loading: React.FC<IProps> = (props) => {
  return (
    <div className={combineClass('f-loading-container', props.className)}>
      <div className={combineClass('f-loading', `f-loading-${props.name}`, `f-loading-${props.size}`)}>
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
      {
        props.message && <div className="f-loading-text">{props.message}</div>
      }
    </div>
  )
}

export default Loading;