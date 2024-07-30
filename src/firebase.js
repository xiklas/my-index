import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Für Firestore

// Deine Firebase-Konfigurationsdaten hier einfügen
const firebaseConfig = {
    apiKey: "AIzaSyC2VeXZ2zl1WS3OvB0XwI0qdoeEkYaUa_c",
    authDomain: "theprojectindex-8b645.firebaseapp.com",
    projectId: "theprojectindex-8b645",
    storageBucket: "theprojectindex-8b645.appspot.com",
    messagingSenderId: "117584606387",
    appId: "1:117584606387:web:7c4af917f4089ab93d2cc6",
    measurementId: "G-JH8RTQL2MK"
  };

// Initialisiere Firebase
firebase.initializeApp(firebaseConfig);

// Exportiere die Firestore-Datenbank
const db = firebase.firestore();

export { db };
