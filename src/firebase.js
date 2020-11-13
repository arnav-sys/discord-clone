import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb-7-c6IT5ZDGOwGTzSQ168IofmIgO1ts",
  authDomain: "react-authentication-tes-66381.firebaseapp.com",
  databaseURL: "https://react-authentication-tes-66381.firebaseio.com",
  projectId: "react-authentication-tes-66381",
  storageBucket: "react-authentication-tes-66381.appspot.com",
  messagingSenderId: "1079568641325",
  appId: "1:1079568641325:web:fb0177bb64fef7f78677a4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
