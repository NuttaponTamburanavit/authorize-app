import React, { Component } from 'react';
import { Layout, Menu, Icon  } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

class MenuSidebar extends Component {
  render() {
    const { url } = this.props;

    return (
      <Sider {...this.props}>
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
    )
  }
}

export default MenuSidebar;