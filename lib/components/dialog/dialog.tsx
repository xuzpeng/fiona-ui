import React, { Fragment, ReactElement } from 'react';
import PropTypes from 'prop-types';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';
import './dialog.scss';
import Icon from '../icon/icon';

interface IProps {
  visible?: boolean;
  position?: string;
  title?: string;
  buttons: ReactElement[];
  onClose: React.MouseEventHandler;
  closeOnMask?: boolean;
}

const prefix = PRC('f-dialog');

const Dialog: React.FunctionComponent<IProps> = (props) => {
  const maskCloseDialog: React.MouseEventHandler = (e: React.MouseEvent) => {
    if (props.closeOnMask) {
      props.onClose(e);
    }
  }
  return (
    props.visible ? <Fragment>
      <div className={`${prefix('mask')}`} onClick={maskCloseDialog}></div>
      <div className={combineClass(prefix(), prefix(props.position))}>
        <header className={prefix('header')}>
          <div className={prefix('title')}>{props.title}</div>
          <div className={`${prefix('close')}`} onClick={props.onClose}>
            <Icon name="close"/>
          </div>
        </header>
        <main className={prefix('main')}>
          {props.children}
        </main>
        <footer className={prefix('footer')}>
          {
            props.buttons.map((btn, index) => {
              return React.cloneElement(btn, {
                key: index,
                className: prefix('footer-button')
              })
            })
          }
        </footer>
      </div>
    </Fragment> : null
  )
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  position: PropTypes.string,
  title: PropTypes.string,
  closeOnMask: PropTypes.bool
}

Dialog.defaultProps = {
  visible: false,
  position: 'center',
  title: '默认标题',
  closeOnMask: true
}

export default Dialog;
