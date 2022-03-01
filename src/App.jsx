import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';
export default function App() {
  return (
    <>
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
              {/* need to make */}
            </Route>
            <Route path="/profile/tasks">{/* need to make */}</Route>
            <Route path="/profile/tasks/:id">{/* need to make */}</Route>
            <Route path="/profile/tasks/:id/edit">{/* need to make */}</Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/profile/completed">{/* need to make */}</Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
      <h1
        className={`
      bg-green-400
        text-3xl
        text-center
      text-white
        font-bold
        p-10
        w-1/2
        mx-auto
        mt-10
        ${styles.myCustomCssClass}
      `}
      >
        Hello, World!
      </h1>
    </>
  );
}
