import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
require('codemirror/mode/jsx/jsx');
import './CodeEditor.scss';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import { CSSTransition } from 'react-transition-group';
import Icon from '../lib/components/icon/icon';

interface IProps {
  value: string;
  setRawCode: (value: string) => void;
}

const editorStyle = {
  margin: '20px 0', 
  width: 40, 
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.3,
  cursor: 'pointer',
  backgroundColor: '#ccc',
  fontSize: 12,
  transition: 'transform 0.5s'
};

const CodeEditor = (props: IProps) => {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        marginTop: 20,
        fontSize: '1.2em',
        lineHeight: 1.4,
        fontFamily: 'Hack, monospace'
      }}
    >
      <span 
        style={{
          ...editorStyle,
          transform: `rotate(${show ? -180 : 0}deg)`
        }}
        onClick={() => setShow(!show)}
      >
        <Icon name="unfold" />
      </span>
      <CSSTransition
        classNames="codemirror"
        timeout={300}
        in={show}
        unmountOnExit
        onEnter={() => setShow(true)}
        onExited={() => setShow(false)}
      >
        <CodeMirror
          onBeforeChange={(editor, data, value) => props.setRawCode(value)}
          value={props.value}
          options={{
            mode: 'jsx',
            theme: 'dracula',
            keyMap: 'sublime',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {

          }}
        />
      </CSSTransition>
    </div>
  )
}

export default CodeEditor;
