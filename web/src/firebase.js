import { firebaseConfig } from './config';
import firebase from 'firebase';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export {
  auth,
  db
}