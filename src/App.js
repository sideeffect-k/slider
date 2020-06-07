import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import './App.less';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            path={'/'}
            component={Login}
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
