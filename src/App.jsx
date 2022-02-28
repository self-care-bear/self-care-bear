import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <>
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
      <Profile />
      <Auth isSigningUp={true} />
    </>
  );
}
