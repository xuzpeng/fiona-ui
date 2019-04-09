import React, { Component, Fragment } from 'react';
import { menuList } from '../../config/menuConfig';
// const menuList = require('../../config/menuConfig').menuList;
import './style.scss';

interface IProps {
  className?: string;
}

export default class CNavLeft extends Component<IProps> {
  render() {
    return (
      <div className="nav-left">
        {this.initMenuList(menuList)}
      </div>
    )
  }
  initMenuList = (menuList: Array<any>) => {
    return menuList.map((menuItem: any) => {
      if (menuItem.children) {
        return <div key={menuItem.key}>
          <h3>
            {menuItem.title}
          </h3>
          <ul>
            {this.initMenuList(menuItem.children)}
          </ul>
        </div>
      } else {
        return <li key={menuItem.key}>{menuItem.title}</li>
      }
    })
  }
}
