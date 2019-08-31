import React, { Component } from 'react';
import { Layout, Menu, Icon  } from 'antd';
import Router from './router';
import MenuSidebar from '../../organisms/menuSidebar';

import './style.scss';

const { Header, Sider, Content } = Layout;

class AdminTemplate extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { url } = this.props.match;
    
    return (
      <Layout className="admin-template-container">
        <MenuSidebar 
          trigger={null} 
          collapsible 
          url={url}
          collapsed={collapsed} 
        />

        <Layout>
          <Header className="menu-bar">
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>

          <Content className="content-template">
            <Router url={url} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default AdminTemplate;