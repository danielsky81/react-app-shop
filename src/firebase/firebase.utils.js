import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBvadOI93WN-OD-CJDusXCTfx3LkOy30QY",
  authDomain: "e-commerce-react-app-5c24b.firebaseapp.com",
  databaseURL: "https://e-commerce-react-app-5c24b.firebaseio.com",
  projectId: "e-commerce-react-app-5c24b",
  storageBucket: "e-commerce-react-app-5c24b.appspot.com",
  messagingSenderId: "918639485898",
  appId: "1:918639485898:web:67dd496d5790638571e533",
  measurementId: "G-RMPMK0WEB8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;