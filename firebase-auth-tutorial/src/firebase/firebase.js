import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCu5t6NF-3LWg5DqmFWVLFdERNGwxfDzBY",
  authDomain: "root-micron-130723.firebaseapp.com",
  databaseURL: "https://root-micron-130723.firebaseio.com",
  projectId: "root-micron-130723",
  storageBucket: '',
  messagingSenderId: "597516172065",
};

const devConfig = {
  apiKey: "AIzaSyCu5t6NF-3LWg5DqmFWVLFdERNGwxfDzBY",
  authDomain: "root-micron-130723.firebaseapp.com",
  databaseURL: "https://root-micron-130723.firebaseio.com",
  projectId: "root-micron-130723",
  storageBucket: '',
  messagingSenderId: "597516172065",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};