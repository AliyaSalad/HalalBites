import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const firebaseConfig = {
  apiKey: "AIzaSyDNEnlaxl9q3ptf-ZFIMqC0jhMFWQrdN3A",
  authDomain: "purebite-a2935.firebaseapp.com",
  projectId: "purebite-a2935",
  storageBucket: "purebite-a2935.appspot.com",
  messagingSenderId: "631803465012",
  appId: "1:631803465012:web:fc85dd8a3082a2998ee961",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
