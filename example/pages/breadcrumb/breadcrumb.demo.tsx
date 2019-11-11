import React, { Fragment, useState } from 'react';
import BreadCrumb from './breadcrumb.example';
import CodeEditor from '../../CodeEditor';
import ReactMarkdown from 'react-markdown';

export default () => {
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./breadcrumb.example.tsx').default);
  return <Fragment>
    <BreadCrumb />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <CodeEditor value={rawCode} setRawCode={setRawCode} />
    <ReactMarkdown source={require('!!raw-loader!./breadcrumb.md').default} className="md"/>
  </Fragment>
}
