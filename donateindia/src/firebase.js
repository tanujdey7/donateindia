import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC0v8CUMJR_BV1K915eJ_WAZzNlJBm424s",
    authDomain: "donate-india-edeca.firebaseapp.com",
    projectId: "donate-india-edeca",
    storageBucket: "donate-india-edeca.appspot.com",
    messagingSenderId: "304982759746",
    appId: "1:304982759746:web:ff30252ebce17449d690db"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;