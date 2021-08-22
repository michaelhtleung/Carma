import { firebaseConfig } from './config';
import firebase from 'firebase';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const storage = firebase.storage();

export {
  auth,
  db,
  firebase,
  storage,
}