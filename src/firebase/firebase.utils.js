import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBFOP8Tvf71QTuyVZYMEYKr7Sbr9du2dNw",
    authDomain: "crwn-clothing-db-fd225.firebaseapp.com",
    projectId: "crwn-clothing-db-fd225",
    storageBucket: "crwn-clothing-db-fd225.appspot.com",
    messagingSenderId: "446440605031",
    appId: "1:446440605031:web:54b9ea5b0458289ce31bc2",
    measurementId: "G-M5FVREM6Z0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;