import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';
import TestLayout from './TestLayout';

const Main = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${url}/profile`}>
          <Profile/>
        </Route>
        <Route path={`${url}/score`}>
          Score
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