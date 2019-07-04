import React from 'react';
import { Affix, Button } from '../../../lib';
import './affix.example.scss';

export default () => {
  return <div className="f-affix-demo">
    <div className="f-affix-demo-1">
      <h1>基础用法</h1>
      <Affix offsetTop={120}>
        <Button type="primary">Affix</Button>
      </Affix>
      <Affix offsetTop={20}>
        <Button type="primary">Affix</Button>
      </Affix>
    </div>
  </div>
}
