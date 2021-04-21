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
  appId: "1:918639485898:web:f76d2bd0392925b471e533",
  measurementId: "G-K1D1TZSMTX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;