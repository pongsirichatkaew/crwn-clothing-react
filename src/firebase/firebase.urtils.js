import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC7Dvy8Vvg7ofc3gpQAPzjsNyEYrvUo3xQ',
  authDomain: 'crwn-db-29070.firebaseapp.com',
  projectId: 'crwn-db-29070',
  storageBucket: 'crwn-db-29070.appspot.com',
  messagingSenderId: '108046698311',
  appId: '1:108046698311:web:76a7148ea309847972ae62',
  measurementId: 'G-NT7FV00VT7',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
