import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDrDeoqsz0t1Rmq3MeOwNWtO6sZM765g0",
  authDomain: "jbn-lounge.firebaseapp.com",
  projectId: "jbn-lounge",
  storageBucket: "jbn-lounge.firebasestorage.app",
  messagingSenderId: "389904303289",
  appId: "1:389904303289:web:a300bf840e3f3e069b0768",
  measurementId: "G-GNLCEYZVKS"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);