import './App.css';
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
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
