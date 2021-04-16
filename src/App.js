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
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/book/:id"></Route>
          <Route path="/about-us">
            <NotFound />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
