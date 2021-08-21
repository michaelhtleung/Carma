import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/app">
            <Main/>
          </Route>
          <Route>
            Authorization Stuff
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
