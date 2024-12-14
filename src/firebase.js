// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp6-Z0MaZa8bTQvoesMbjD_ozvs03JINI",
  authDomain: "godvay-lyric-presenter.firebaseapp.com",
  projectId: "godvay-lyric-presenter",
  storageBucket: "godvay-lyric-presenter.firebasestorage.app",
  messagingSenderId: "191343497665",
  appId: "1:191343497665:web:7018aebb613ad019081f40",
  measurementId: "G-W4G4T75RK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);