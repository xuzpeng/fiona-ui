import React, { Fragment } from 'react';
import './loading.scss';
import combineClass from '../../helpers/combineClass';
import PropTypes from 'prop-types';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  size?: string;
  message?: string;
  loading?: boolean;
}

const Loading: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      {
        props.loading && <div className={combineClass('f-loading-container', props.className)}>
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
      }
    </Fragment>
  )
}

Loading.propTypes = {
  loading: PropTypes.bool
}

Loading.defaultProps = {
  loading: true,
  name: 'spin',
  size: 'medium'
}

export default Loading;
