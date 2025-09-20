// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// optional if you still want analytics
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlNOQ-rdC0zWQU_YXBH9RBWdGqFi9alkA",
  authDomain: "urbannext-7dada.firebaseapp.com",
  projectId: "urbannext-7dada",
  storageBucket: "urbannext-7dada.firebasestorage.app",
  messagingSenderId: "737597531170",
  appId: "1:737597531170:web:1c7893426c81994ce0567b",
  measurementId: "G-VX5VR7J756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// Optional: if you want analytics
// export const analytics = getAnalytics(app);
