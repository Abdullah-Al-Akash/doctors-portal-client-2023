// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyDqnxuvcgsEyrAP1gM0IOPTcrGEekrNJYU",
        authDomain: "doctors-portal03.firebaseapp.com",
        projectId: "doctors-portal03",
        storageBucket: "doctors-portal03.appspot.com",
        messagingSenderId: "8970495695",
        appId: "1:8970495695:web:4d926fa414bf95b98ab9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;