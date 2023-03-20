import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAdMAr4HFdQ7zHBKfHM5wVLvtdu8wSfQ44",
    authDomain: "vue-block-system-39b19.firebaseapp.com",
    projectId: "vue-block-system-39b19",
    storageBucket: "vue-block-system-39b19.appspot.com",
    messagingSenderId: "144389887050",
    appId: "1:144389887050:web:568489ed33d1da270802b3"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

export {db};