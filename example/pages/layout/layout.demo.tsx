import React, { Fragment, useState } from 'react';
import LayoutExample from './layout.example';
import CodeEditor from '../../CodeEditor';
import ReactMarkdown from "react-markdown";

export default () => {
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./layout.example.tsx').default);
  return <Fragment>
    <LayoutExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <CodeEditor value={rawCode} setRawCode={setRawCode}/>
    <ReactMarkdown source={require('!!raw-loader!./layout.md').default} className="md"/>
  </Fragment>
}
