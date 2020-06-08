import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import NotFound from '../Pages/NotFound';

const ProtectedRoute = (props) => {
  const {component: Component, authenticated, ...rest} = props;
  console.log('authenticated', authenticated);
  return (
    <Route
      {...rest}
      render={
        (_props) => {
          if (authenticated) {
            return <Component {..._props} />;
          }
          return <NotFound />;
        }
      }
    />
  );
};

const mapStatesToProps = (state) => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStatesToProps)(ProtectedRoute);