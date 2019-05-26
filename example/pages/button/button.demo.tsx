import React, { Fragment, useState } from 'react';
import RawCode from '../../rawCode';
import ButtonExample from './button.example';
import { Button } from '../../../lib';

export default () => {
  const [y, setY] = useState(0);
  return <Fragment>
    <ButtonExample/>
    <Button 
      onClick={() => setY(y === 0 ? 1 : 0)} 
      style={{marginTop: 20}}
    >代码展示</Button>
    {
      <RawCode scaleY={y} code={require('!!raw-loader!./button.example.tsx').default}></RawCode>
    }
  </Fragment>
}
