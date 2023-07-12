// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-lDxkYHw8AluoEjpSyTqR485UF_h8ZHU',
  authDomain: 'tech-net-54dcb.firebaseapp.com',
  projectId: 'tech-net-54dcb',
  storageBucket: 'tech-net-54dcb.appspot.com',
  messagingSenderId: '316709650778',
  appId: '1:316709650778:web:6dbd7a450d51c036007363',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
