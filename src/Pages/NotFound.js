import React from 'react';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
import '../App.less';

const NotFound = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => handleClick()}>返回登录页面</Button>}
    />
  );
};

export default NotFound;