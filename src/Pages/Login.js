import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import addAuth from '../redux/actions';

const Login = (props) => {
  const { dispatch } = props;
  const history = useHistory();

  const auth = () => {
    dispatch(addAuth(true));
    history.push('/protected');
  }
  const fakeAuth = () => {
    dispatch(addAuth(false));
    history.push('/protected');
  }
  return (
    <div className="content">
      12312321312231
      <button onClick={() => auth()}>验证</button>
      <button onClick={() => fakeAuth()}>伪验证</button>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStatesToProps)(Login);