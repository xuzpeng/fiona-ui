import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';
import './dialog.scss';

interface IProps {
  visible?: boolean;
  position?: string;
}

const prefix = PRC('f-dialog');

const Dialog: React.FunctionComponent<IProps> = (props) => {
  return (
    props.visible ? <Fragment>
      <div className={`${prefix('mask')}`}></div>
      <div className={combineClass(prefix(), prefix('center'))}>
        <header className={prefix('header')}>提示</header>
        <main className={prefix('main')}></main>
        <footer className={prefix('footer')}>
          <button>取消</button>
          <button>确认</button>
        </footer>
      </div>
    </Fragment> : null
  )
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  position: PropTypes.string
}

Dialog.defaultProps = {
  visible: false,
  position: 'center'
}

export default Dialog;
