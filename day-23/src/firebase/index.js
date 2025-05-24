import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjNsXdvqMN5vbWq9Qb-Ks5W2C_Gzki77U",
  authDomain: "react-blogs-app-74d3d.firebaseapp.com",
  projectId: "react-blogs-app-74d3d",
  databaseURL: "https://react-blogs-app-74d3d-default-rtdb.firebaseio.com",
  storageBucket: "react-blogs-app-74d3d.firebasestorage.app",
  messagingSenderId: "170379346293",
  appId: "1:170379346293:web:9d8f5a37f38b17b9f2533c"
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);

const database = getDatabase(config)
const auth = getAuth(config)


export {config, database, auth}