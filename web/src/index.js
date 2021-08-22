import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const config = {
  apiKey: "AIzaSyAyekGO9KNJysIEt_ml8QXsWJocfoHrRDk",
  authDomain: "carma-323620.firebaseapp.com",
  projectId: "carma-323620",
  storageBucket: "carma-323620.appspot.com",
  messagingSenderId: "976952538338",
  appId: "1:976952538338:web:d299b7640cde7dbbe5dabb",
  measurementId: "G-25E21LGSDG"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={config}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
