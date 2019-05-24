import React from 'react';
import { Loading } from '../../../lib';
import './loading.example.scss';

export default () => {
  return (
    <div>
      <div className="f-loading-demo">
        <h1>第一个例子</h1>
        <Loading size="small" className="f-loading-demo-icon" name="loading"/>
        <Loading size="medium" className="f-loading-demo-icon" name="loading"/>
        <Loading size="large" className="f-loading-demo-icon" name="loading"/>
        <Loading size="small" className="f-loading-demo-icon" name="spin"/>
        <Loading size="medium" className="f-loading-demo-icon" name="spin"/>
        <Loading size="large" className="f-loading-demo-icon" name="spin"/>
      </div>
    </div>
  )
}