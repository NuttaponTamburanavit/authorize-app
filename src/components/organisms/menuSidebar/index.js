import React, { Component } from 'react';
import { Layout, Menu, Icon  } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

const { Sider } = Layout;

class MenuSidebar extends Component {
  state = {
    url: null,
    collapsed: true
  }
  static getDerivedStateFromProps(props, next) {
    const { url, collapsed } = props;
    return {
      url,
      collapsed
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { url, collapsed } = this.state;

    if (url !== nextState.url) {
      return true;
    } else if (collapsed !== nextState.collapsed) {
      return true;
    }
    return false;
  }
  render() {
    const { url, collapsed } = this.state;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to={`${url}`}>
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`${url}/profile`}>
              <Icon type="user" />
              <span>Profile</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MenuSidebar;