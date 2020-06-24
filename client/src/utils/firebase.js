import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// Initialize Firebase

 const firebaseConfig = {
    apiKey: "AIzaSyC2yjoxayP64XY81OdstgkXZOXaEtia2m0",
    authDomain: "ronr-1e07e.firebaseapp.com",
    databaseURL: "https://ronr-1e07e.firebaseio.com",
    projectId: "ronr-1e07e",
    storageBucket: "ronr-1e07e.appspot.com",
    messagingSenderId: "865362405287",
    appId: "1:865362405287:web:8e7ac6a2027840d27a3882"
  };

const db = firebase.initializeApp(firebaseConfig);
export default db;

export const GoogleSignOn = new firebase.auth.GoogleAuthProvider()
GoogleSignOn.setCustomParameters({
  'prompt': 'select_account'
});
