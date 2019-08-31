import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import Router from './router';
import MenuSidebar from '../../organisms/menuSidebar';

import AuthActions from '../../../redux/auth/actions';

import './style.scss';

const { Header, Content } = Layout;
const { logout } = AuthActions;

class AdminTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  logout = () => {
    const { logout } = this.props;
    logout();
  }

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

            <Icon 
              className="trigger"
              type="logout" 
              onClick={this.logout}
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

export default connect(
  null,
  { logout }
) (AdminTemplate);