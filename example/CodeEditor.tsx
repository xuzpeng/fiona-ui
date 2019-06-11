import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
require('codemirror/mode/jsx/jsx');
import './CodeEditor.scss';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

interface IProps {
  value: string;
  setRawCode: (value: string) => void;
  scaleY?: number;
}

const CodeEditor = (props: IProps) => {
  return (
    <div
      style={{
        marginTop: 20,
        transform: 'scaleY(' + props.scaleY + ')',
        transition: 'transform 0.2s',
        transformOrigin: 'left top',
        fontSize: '1.2em',
        lineHeight: 1.4,
        fontFamily: 'Hack, monospace'
      }}
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
    </div>
  )
}

export default CodeEditor;