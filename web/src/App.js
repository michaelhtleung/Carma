import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/app">
            <Main/>
          </Route>
          <Route>
            <Welcome/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
