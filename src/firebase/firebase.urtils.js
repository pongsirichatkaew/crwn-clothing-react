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

export const createUserProfileDocument = async (userAuth, additionaldata) => {
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
        ...additionaldata,
      });
      return userRef;
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
