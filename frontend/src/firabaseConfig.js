import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFZ590ClneE7cYnC6XdTaM9HSmJdqb1l8",

  authDomain: "agri-product-app.firebaseapp.com",

  projectId: "agri-product-app",

  storageBucket: "agri-product-app.appspot.com",

  messagingSenderId: "582847577644",

  appId: "1:582847577644:web:0bd092b4fa84ceb76c9b89",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
