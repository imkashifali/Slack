import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3Qp9rsuV67FI7fTC-TVysH7hHgd7aUxI",
  authDomain: "basic-user-29e5c.firebaseapp.com",
  projectId: "basic-user-29e5c",
  storageBucket: "basic-user-29e5c.appspot.com",
  messagingSenderId: "822130252017",
  appId: "1:822130252017:web:e8b2046eadcbe1e81f3150",
  measurementId: "G-XRNVT7VL7J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
