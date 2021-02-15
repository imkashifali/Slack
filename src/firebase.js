import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZCrdgAeuEuvHW7JTlbJoWhvnVHCHwjOc",
  authDomain: "linked-in-8202f.firebaseapp.com",
  projectId: "linked-in-8202f",
  storageBucket: "linked-in-8202f.appspot.com",
  messagingSenderId: "773262982450",
  appId: "1:773262982450:web:9b92e5a49d490c32caeb2b",
  measurementId: "G-FN6NQXZJWN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
