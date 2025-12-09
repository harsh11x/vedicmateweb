import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Live Firebase Configuration (User Provided)
const firebaseConfig = {
    apiKey: "AIzaSyAgEBcxxQtrf7c9F8UKCefkEEdmC9cBFuk",
    authDomain: "vedic-mate.firebaseapp.com",
    projectId: "vedic-mate",
    storageBucket: "vedic-mate.firebasestorage.app",
    messagingSenderId: "848781830717",
    appId: "1:848781830717:web:cb57acd64a973d3a87d854",
    measurementId: "G-NGDLJQ78ZS"
};

// Initialize Firebase (Server + Client safe check)
let app;
let auth: any;
let analytics: any;

if (typeof window !== "undefined") {
    // Client-side initialization
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);

    // Initialize Analytics only if supported (browser env)
    isSupported().then((yes) => {
        if (yes) {
            analytics = getAnalytics(app);
        }
    });
} else {
    // Server-side / Build time safe initialization
    // We don't really need auth on server for this static export app, 
    // but this prevents build errors if imported.
    if (getApps().length > 0) {
        app = getApp();
    } else {
        app = initializeApp(firebaseConfig);
    }
    // Auth might complain in node env without specific polyfills, 
    // but standard SDK often works for basic config holding.
    try {
        auth = getAuth(app);
    } catch (e) {
        console.warn("Auth init failed on server (expected):", e);
    }
}

export { auth, analytics };
