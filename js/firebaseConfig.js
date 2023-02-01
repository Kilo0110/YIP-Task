// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNhEIiuvnTwdDsC6VDOXkYirXLfqcnxq8',
  authDomain: 'yips-task.firebaseapp.com',
  projectId: 'yips-task',
  storageBucket: 'yips-task.appspot.com',
  messagingSenderId: '533629217129',
  appId: '1:533629217129:web:0abe34273d3ac31571b5f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
