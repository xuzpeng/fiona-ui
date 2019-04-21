import React, { Fragment, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';
import './dialog.scss';
import Icon from '../icon/icon';
import ReactDOM from 'react-dom';
import Button from '../button/button';

interface IProps {
  visible?: boolean;
  position?: string;
  title?: string;
  buttons?: ReactElement[];
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
  const dialogComp = props.visible ? <Fragment>
    <div className={prefix('mask')} onClick={maskCloseDialog}></div>
    <div className={combineClass(prefix(), prefix(props.position))}>
      <header className={prefix('header')}>
        <div className={prefix('title')}>{props.title}</div>
        <div className={prefix('close')} onClick={props.onClose}>
          <Icon name="close" />
        </div>
      </header>
      <main className={prefix('main')}>
        {props.children}
      </main>
      {
        props.buttons && props.buttons.length ? <footer className={prefix('footer')}>
          {
            props.buttons.map((btn, index) => {
              return React.cloneElement(btn, {
                key: index,
                className: prefix('footer-button')
              })
            })
          }
        </footer> : null
      }
    </div>
  </Fragment> : null
  return ReactDOM.createPortal(
    dialogComp,
    document.body
  )
}

const highDialog = (content: ReactElement | ReactNode, buttons?: Array<ReactElement>) => {
  const onCancel = () => {
    ReactDOM.render(React.cloneElement(
      hignComp,
      {
        visible: false
      }
    ), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const hignComp = (
    <Dialog
      visible={true}
      onClose={() => onCancel()}
      buttons={buttons}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(hignComp, div);
  return onCancel;
}

const alert = (content: string) => {
  const onClose = highDialog(content, [
    <Button type="primary" onClick={() => onClose()}>确认</Button>
  ]);
}

const confirm = (content: string, succCb?: () => void) => {
  const onCancel = highDialog(content, [
    <Button onClick={() => onCancel()}>取消</Button>,
    <Button type="primary" onClick={() => {
      succCb && succCb();
      onCancel();
    }}>确认</Button>,
  ]);
}

const modal = (content?: ReactNode | ReactElement) => {
  return highDialog(content);
}

export {
  alert,
  confirm,
  modal
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
