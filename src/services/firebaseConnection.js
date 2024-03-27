
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCm-N_rStEiEten7TIjCUIi6zxUy6BTxkc",
    authDomain: "padaria-eeb32.firebaseapp.com",
    databaseURL: "https://padaria-eeb32-default-rtdb.firebaseio.com",
    projectId: "padaria-eeb32",
    storageBucket: "padaria-eeb32.appspot.com",
    messagingSenderId: "507562594451",
    appId: "1:507562594451:web:98ca40ccfaa84b24287d66"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };