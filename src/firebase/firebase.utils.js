import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBFOP8Tvf71QTuyVZYMEYKr7Sbr9du2dNw",
    authDomain: "crwn-clothing-db-fd225.firebaseapp.com",
    projectId: "crwn-clothing-db-fd225",
    storageBucket: "crwn-clothing-db-fd225.appspot.com",
    messagingSenderId: "446440605031",
    appId: "1:446440605031:web:54b9ea5b0458289ce31bc2",
    measurementId: "G-M5FVREM6Z0"
};

const firebaseApp = initializeApp(config);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

       try {
        await setDoc(userDocRef, {
            createdAt,
            displayName,
            email
        })
       } catch(error) {
            console.log(`There is a problem with creating a user ${error.message}`);
       }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
    if(!email || !password) return;

    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, { displayName: displayName })
}

