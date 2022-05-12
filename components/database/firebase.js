import * as firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAvFkaX5RjRnJlsUmA-ug9q3UywmhLEPSU",
  authDomain: "loanhippo-8047c.firebaseapp.com",
  projectId: "loanhippo-8047c",
  storageBucket: "loanhippo-8047c.appspot.com",
  messagingSenderId: "61158086785",
  appId: "1:61158086785:web:2004b748ea1c94fefed580"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
