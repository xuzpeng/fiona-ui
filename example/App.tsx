import React, { Component } from 'react';
import CHeader from './components/CHeader/CHeader.example';
import CNavLeft from './components/CNavLeft/CNavLeft.example';
import './style/index.scss';
import { Layout, Aside, Header, Content } from '../lib/components/layout/layout';

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <CHeader />
      //   <main className="main-content">
      //     <CNavLeft />
      //     <div className="main-content-right">
      //       {this.props.children}
      //     </div>
      //   </main>
      // </div>
      <Layout>
        <Header>
          <CHeader />
        </Header>
        <Layout className="main-content">
          <Aside className="c-navleft">
            <CNavLeft/>
          </Aside>
          <Content className="main-content-right">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
