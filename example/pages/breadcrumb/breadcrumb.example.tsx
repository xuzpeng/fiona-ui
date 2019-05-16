import React from 'react';
import {Breadcrumb, Icon} from '../../../lib';
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
      <div className='f-breadcrumb-demo'>
        <h1>第二个例子</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Icon name="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon name="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}