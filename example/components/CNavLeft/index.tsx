import React, { Component } from 'react';
import { menuList } from '../../config/menuConfig';
import { Link } from 'react-router-dom';
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
        return <Link key={menuItem.key} to={menuItem.key}>
          <li>{menuItem.title}</li>
        </Link>
      }
    })
  }
}
