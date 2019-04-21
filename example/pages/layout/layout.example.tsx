import React from 'react';
import Layout from '../../../lib/components/layout/layout';
import Header from '../../../lib/components/layout/header';
import Content from '../../../lib/components/layout/content';
import Footer from '../../../lib/components/layout/footer';
import Aside from '../../../lib/components/layout/aside';
import './layout.example.scss';

export default () => {
  return (
    <div>
      <div className="demo1">
        <h1>第一个例子</h1>
        <Layout style={{height: '500px'}} className="l-layout">
          <Header className="l-header">Header</Header>
          <Content className="l-content">Content</Content>
          <Footer className="l-footer">Footer</Footer>
        </Layout>
      </div>
      <div className="demo2">
        <h1>第二个例子</h1>
        <Layout style={{height: '500px'}} className="l-layout">
          <Header className="l-header">Header</Header>
          <Layout className="l-l-layout">
            <Aside className="l-l-aside">Aside</Aside>
            <Content className="l-l-content">Content</Content>
          </Layout>
          <Footer className="l-footer">Footer</Footer>
        </Layout>
      </div>
      <div className="demo3">
        <h1>第三个例子</h1>
        <Layout style={{height: '500px'}} className="l-layout">
          <Header className="l-header">Header</Header>
          <Layout className="l-l-layout">
            <Content className="l-l-content">Content</Content>
            <Aside className="l-l-aside">Aside</Aside>
          </Layout>
          <Footer className="l-footer">Footer</Footer>
        </Layout>
      </div>
      <div className="demo4">
        <h1>第四个例子</h1>
        <Layout style={{height: '500px'}} className="l-layout">
          <Aside className="l-aside">Aside</Aside>
          <Layout className="l-l-layout">
            <Header className="l-l-header">Header</Header>
            <Content className="l-l-content">Content</Content>
            <Footer className="l-l-footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}