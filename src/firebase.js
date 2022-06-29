// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAkgW4ViHedCfBg1enQ5iKVgDPwmiPMV9o",
  authDomain: "prembheemunidisney.firebaseapp.com",
  projectId: "prembheemunidisney",
  storageBucket: "prembheemunidisney.appspot.com",
  messagingSenderId: "802538697348",
  appId: "1:802538697348:web:bd3ad7e3336b775d7248d1",
  measurementId: "G-852FN9X3G6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider };
export default db;
