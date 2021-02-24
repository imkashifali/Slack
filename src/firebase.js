import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzeEGPW9ho-cUM4dMV-024DEbXXfx8osI",
  authDomain: "slack-faba9.firebaseapp.com",
  projectId: "slack-faba9",
  storageBucket: "slack-faba9.appspot.com",
  messagingSenderId: "98446113599",
  appId: "1:98446113599:web:89b960c652042dbe02718a",
  measurementId: "G-ZZ1XXHFC41",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
