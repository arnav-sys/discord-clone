/*import firebase from "firebase";

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
*/
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2qGav6kEMMMVy6T5vkRW4dWFaFT9m0Pg",
  authDomain: "discord-clone-8545b.firebaseapp.com",
  projectId: "discord-clone-8545b",
  storageBucket: "discord-clone-8545b.appspot.com",
  messagingSenderId: "1068798317102",
  appId: "1:1068798317102:web:9f3283926359f5de5145bf",
  measurementId: "G-XLQ3J5Z8RB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
