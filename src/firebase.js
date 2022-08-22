import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_72_POCONIvh5TwEsZqbiEECZ_vTQ3hg",
  authDomain: "clone-89d16.firebaseapp.com",
  projectId: "clone-89d16",
  storageBucket: "clone-89d16.appspot.com",
  messagingSenderId: "1011012318234",
  appId: "1:1011012318234:web:5bf027f2455abb31484da3",
  measurementId: "G-Z2MGFBYX9H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
