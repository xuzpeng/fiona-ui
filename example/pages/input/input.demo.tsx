import React, { Fragment, useState } from 'react';
import RawCode from '../../rawCode';
import InputExample from './input.example';
import { Button } from '../../../lib';

export default () => {
  const [y, setY] = useState(0);
  return <Fragment>
    <InputExample/>
    <Button 
      onClick={() => setY(y === 0 ? 1 : 0)} 
      style={{marginTop: 20}}
    >代码展示</Button>
    {
      //@ts-ignore
      <RawCode scaleY={y} code={require('!!raw-loader!./input.example').default}></RawCode>
    }
  </Fragment>
}
