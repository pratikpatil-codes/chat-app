// Firebase Configuration
// Replace these values with your own Firebase project credentials

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC5Rrl3AgiK-L-05WT1JqgLlOoRUZChV3Q",
  authDomain: "chat-app-390f2.firebaseapp.com",
  databaseURL: "https://chat-app-390f2-default-rtdb.firebaseio.com",
  projectId: "chat-app-390f2",
  storageBucket: "chat-app-390f2.firebasestorage.app",
  messagingSenderId: "934800721144",
  appId: "1:934800721144:web:912620339bc069d38ea70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
