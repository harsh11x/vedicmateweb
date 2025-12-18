
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAgEBcxxQtrf7c9F8UKCefkEEdmC9cBFuk",
    authDomain: "vedic-mate.firebaseapp.com",
    projectId: "vedic-mate",
    storageBucket: "vedic-mate.firebasestorage.app",
    messagingSenderId: "848781830717",
    appId: "1:848781830717:web:cb57acd64a973d3a87d854",
    measurementId: "G-NGDLJQ78ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics conditionally (only client-side)
let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}
