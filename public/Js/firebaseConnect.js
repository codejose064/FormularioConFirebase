import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyB8pPuafxd1a33_hsWSLlhtr-pfuioUblI",
    authDomain: "frm-prb.firebaseapp.com",
    projectId: "frm-prb",
    storageBucket: "frm-prb.appspot.com",
    messagingSenderId: "981548376012",
    appId: "1:981548376012:web:4b432bc745ea77c76f4769"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore

console.log("Conexión a Firebase establecida correctamente.");