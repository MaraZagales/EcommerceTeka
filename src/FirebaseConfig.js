// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB18lNKBrGxByDCuTZ6IUmcQVEtMhk-lIM",
  authDomain: "ecommerce-teka.firebaseapp.com",
  projectId: "ecommerce-teka",
  storageBucket: "ecommerce-teka.appspot.com",
  messagingSenderId: "166539321562",
  appId: "1:166539321562:web:5a5b632e6fe2b8569fc5e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db