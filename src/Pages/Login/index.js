import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import addAuth from '../../redux/actions';
import './index.less';
import logo from '../../assets/images/logo.svg';
import { Layout, Form, Tabs, Input, Button } from 'antd';
import { UserOutlined, LockTwoTone } from '@ant-design/icons';
const { Header, Content } = Layout;
const { TabPane } = Tabs;


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = props;
  const history = useHistory();

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    if(id === 'username') {
      setUsername(value);
    }
    else {
      setPassword(value);
    }
  }
  const handleKeyUp = (e) => {
    const key = e.key;
    if(key === 'Enter'){
      axios.get('/api/?s=Um.User.Item&id=1')
        .then(res => res.data)
        .then(data => {
          dispatch(addAuth(true));
          history.push('/main');
          console.log(data.data);
        })
        .catch(err => console.log('err'));
    }
  }
  const callback = (key) => {
    console.log(key);
  }
  return (
    <div className="login">
      <header className="header"></header>
      <section className="content">
        <header className="content-top">
          <div className="content-top-header">
            <a href="/">
              <img alt="logo" className="content-top-logo" src={logo} />
              <span className="content-top-title">Ant Design</span>
            </a>
          </div>
          <div className="content-top-desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        </header>
        <section className="content-main">
          <Form>
            <div style={{textAlign:'center', width: '100%'}}>
            <Tabs className="content-main-tab">
              <TabPane tab="账号密码登录  " key="1" />
            </Tabs>
            </div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入你的用户名!',
                },
              ]}
            >
              <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入你的密码!',
                },
              ]}
            >
              <Input placeholder="密码" prefix={<LockTwoTone />} size="large" />
            </Form.Item>
            <div className="content-main-op">
              <a href="/">注册账户</a>
              <a href="/">忘记密码</a>
            </div>
            <Form.Item >
              <Button type="primary" htmlType="submit" block size="large">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </section>
      <footer></footer>
    </div>
  );
};

// <div className="content-main-tab"><span className="content-main-tab-message">账号密码登录</span></div>

const mapStatesToProps = (state) => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStatesToProps)(Login);