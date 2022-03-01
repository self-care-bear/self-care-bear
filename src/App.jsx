import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';
import TaskSelector from './views/Tasks/TaskSelector';
import CreateProfile from './views/Profile/CreateProfile';
import TaskDetail from './views/Tasks/TaskDetail';
import Completed from './views/Completed/Completed';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            <Route exact path="/profile/create">
              <CreateProfile />
            </Route>
            <Route path="/profile/tasks">
              <TaskSelector />
            </Route>
            <Route path="/profile/tasks/:id">
              <TaskDetail />
            </Route>
            <Route path="/profile/tasks/:id/edit">
              <TaskDetail isEditing />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/profile/completed">
              <Completed />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
