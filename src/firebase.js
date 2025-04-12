import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXDYwDnlHSx1maGiscI03-WMohbekJOEQ",
  authDomain: "sheride-41966.firebaseapp.com",
  projectId: "sheride-41966",
  storageBucket: "sheride-41966.firebasestorage.app",
  messagingSenderId: "391367376085",
  appId: "1:391367376085:web:dc87dc1d06df4f5654b65c",
  measurementId: "G-R1EVEPGJGQ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
