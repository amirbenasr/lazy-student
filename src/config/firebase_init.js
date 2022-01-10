// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQTrWTwYvVcq7j-WLyyL51a6V9DtQjn84",
  authDomain: "lazy-student.firebaseapp.com",
  projectId: "lazy-student",
  storageBucket: "lazy-student.appspot.com",
  messagingSenderId: "793765076629",
  appId: "1:793765076629:web:614e660844050061b1059c",
  measurementId: "G-ZZNGWB0ZBE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
