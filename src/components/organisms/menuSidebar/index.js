import React, { Component } from 'react';
import { Icon  } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

class MenuSidebar extends Component {
  render() {
    const { url, collapsed } = this.props;
    let currentPathname = window.location.pathname;
    return (
      <div className={`sidebar ${collapsed ? `collapsed` : ``}`}>
        <div className="logo" />
        <div className="menu">
          <Link to={`${url}`} className={`menu-item ${url === currentPathname ? `menu-active`: ``}`}>
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Link>
          <Link to={`${url}/profile`} className={`menu-item ${`${url}/profile` === currentPathname ? `menu-active`: ``}`}>
            <Icon type="user" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default MenuSidebar;