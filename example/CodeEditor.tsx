import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
require('codemirror/mode/xml/xml');

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
        transformOrigin: 'left top'
      }}
    >
      <CodeMirror
        onBeforeChange={(editor, data, value) => props.setRawCode(value)}
        value={props.value}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {

        }}
      />
    </div>
  )
}

export default CodeEditor;