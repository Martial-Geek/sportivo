// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyS0szYc8HmY1lguQJUlMAnDGk-UiaKIM",
  authDomain: "sportivo-5aa51.firebaseapp.com",
  projectId: "sportivo-5aa51",
  storageBucket: "sportivo-5aa51.appspot.com",
  messagingSenderId: "877740126669",
  appId: "1:877740126669:web:5a7b92d2ac3aa20a091484",
  measurementId: "G-J8WGYG7S79",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
