import './App.css';
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';
import { Route, Switch } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';
import TaskSelector from './views/Tasks/TaskSelector';
import CreateProfile from './views/Profile/CreateProfile';
import Completed from './views/Completed/Completed';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Auth isSigningUp />
          </Route>
          <Route exact path="/signin">
            <Auth />
          </Route>
          <PrivateRoute exact path="/profile/create">
            <CreateProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile/tasks">
            <TaskSelector />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/profile/completed">
            <Completed />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
