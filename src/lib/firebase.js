// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'chat-app-795c1.firebaseapp.com',
  projectId: 'chat-app-795c1',
  storageBucket: 'chat-app-795c1.appspot.com',
  messagingSenderId: '736386116812',
  appId: '1:736386116812:web:4a5755fd55e638edcfe669',
  measurementId: 'G-C94NYXR3QV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
