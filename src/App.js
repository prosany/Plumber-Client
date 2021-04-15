import React from 'react';
import { AuthProvider } from './customHooks/useAuth';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './style/Global.scss';
import Home from './pages/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about-us">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
