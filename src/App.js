import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Compoents/ProtectedRoute';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Hello from './Pages/Hello';
import './App.less';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            path={'/'}
            exact={true}
            component={Login}
          />
          <ProtectedRoute
            path={'/protected'}
            exact={true}
            component={Hello}
          />
          <Route
            path="*"
            component={NotFound}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
