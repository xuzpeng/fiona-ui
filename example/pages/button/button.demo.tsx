import React, { Fragment, useState } from 'react';
import RawCode from '../../rawCode';
import ButtonExample from './button.example';
import { Button } from '../../../lib';

export default () => {
  const [codeVisible, setCodeVisible] = useState(false);
  return <Fragment>
    <ButtonExample/>
    <Button onClick={() => setCodeVisible(!codeVisible)} style={{marginTop: 20}}>代码展示</Button>
    {
      codeVisible && <RawCode code={require('!!raw-loader!./button.example.tsx').default}></RawCode>
    }
  </Fragment>
}
