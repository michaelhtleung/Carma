import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider, DatabaseProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import Main from './components/Main';
import Welcome from './components/Welcome';

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <FirestoreProvider sdk={firestore}>
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
        </FirestoreProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
