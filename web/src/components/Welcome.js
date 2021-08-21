import { Link, Route, Switch, useHistory } from "react-router-dom"
import Button from "./ButtonOrange"
import Home from "./Home"

const Welcome = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route path="/login">
        Login
      </Route>
      <Route path="/signup">
        Signup
      </Route>
      <Route>
        <Home>
          <Button onClick={() => history.push('/login')} style={{marginTop: "18px", width: "220px"}}>Login</Button>
          <Button onClick={() => history.push('/signup')} style={{marginTop: "54px", width: "220px"}}>Signup</Button>
        </Home>
      </Route>
    </Switch>
  )
}

export default Welcome;