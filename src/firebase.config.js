// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNK3cNARgQe03RZOVCLcZrDo9D8Nn2aDk",
  authDomain: "online-job-portal-ff32e.firebaseapp.com",
  projectId: "online-job-portal-ff32e",
  storageBucket: "online-job-portal-ff32e.appspot.com",
  messagingSenderId: "1060791307719",
  appId: "1:1060791307719:web:1e8e16036ea7dbb8cbdde2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};