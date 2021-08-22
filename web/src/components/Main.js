import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { auth } from '../firebase';
import Navbar from './Navbar';
import Profile from './Profile';
import Score from './Score';
import TestLayout from './TestLayout';
import { useAuthState } from 'react-firebase-hooks/auth';

const Main = () => {
  let { url } = useRouteMatch();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return null;
  }

  return (user === null || error) ? <Redirect to="/login"/> : (
    <>
      <Switch>
        <Route path={`${url}/profile`}>
          <Profile/>
        </Route>
        <Route path={`${url}/score`}>
          <Score/>
        </Route>
        <Route>
          <TestLayout/>
        </Route>
      </Switch>
      <Navbar/>
    </>
  )
}

export default Main;