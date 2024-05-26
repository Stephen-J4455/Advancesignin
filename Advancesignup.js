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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

function showMessage(message, divId) {
    var messageDiv = document.getElementById("divId");
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function () {
        messageDiv.style.opacity = 0;
    }, 5000);
}

const submit = document.getElementById("submit");
submit.addEventListener("click", event => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    const db = getFirestore();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            const userData = {
                email: email,
                username: username
            };
            showMessage("Account Created Successfully.", "signUpMessage");
            const docRef = doc(db, "user", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = "index.html";
                })
                .catch(error => {
                    console.error("error writing document", error);
                });
        })
        .catch(error => {
            const errorCode = error.code;
            if (errorCode == "auth/email-already-in-use") {
                showMessage("Email already in use.", "signUpMessage");
            } else {
                showMessage("unable to create user", "signUpMessage");
            }
        });
});
