import React from 'react';
import { Breadcrumb } from '../../../lib';
import './breadcrumb.example.scss';

export default () => {
  return (
    <div>
      <div className='f-breadcrumb-demo'>
        <h1>第一个例子</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}