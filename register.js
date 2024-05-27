// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {
    getFirestore,
    setdoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG7fRw21apfTA36HKl5LbVWiHI_8zk12A",
    authDomain: "signup-bfcf8.firebaseapp.com",
    projectId: "signup-bfcf8",
    storageBucket: "signup-bfcf8.appspot.com",
    messagingSenderId: "862509936181",
    appId: "1:862509936181:web:6a16490f27a97bac7bcb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submitBrn");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed up
            const user = userCredential.user;
            // ...
            console.log('Creating');
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Erro creating Account');
            // ..
        });
});
