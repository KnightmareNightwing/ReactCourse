import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Book section 9.2: paste YOUR OWN values from the Firebase console here.
// databaseURL is required for the Realtime Database; copy it from Build > Realtime Database.
const firebaseConfig = {
  apiKey: "AIzaSyCU4_Fi17gsqKB_ZIl38q5eN5mjGHRDoQ4",
  authDomain: "chapter11-f3ed6.firebaseapp.com",
  projectId: "chapter11-f3ed6",
  storageBucket: "chapter11-f3ed6.firebasestorage.app",
  messagingSenderId: "25454399900",
  appId: "1:25454399900:web:fc36043227da690559b859",
  measurementId: "G-XK09NDEM5W",
  databaseURL: "https://chapter11-f3ed6-default-rtdb.firebaseio.com/"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
