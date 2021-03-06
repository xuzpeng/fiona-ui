import React, { Fragment, useState } from 'react';
import LoadingExample from './loading.example';
import CodeEditor from '../../CodeEditor';
import ReactMarkdown from 'react-markdown';

export default () => {
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./loading.example').default);
  return <Fragment>
    <LoadingExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <CodeEditor value={rawCode} setRawCode={setRawCode}/>
    <ReactMarkdown source={require('!!raw-loader!./loading.md').default} className="md"/>
  </Fragment>
}
