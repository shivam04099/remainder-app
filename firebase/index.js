import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB195Pyx3Lj1qn_S1a7KiWv4Nwo0Xt5Z6Y",
  authDomain: "remonder-app.firebaseapp.com",
  databaseURL: "https://remonder-app-default-rtdb.firebaseio.com",
  projectId: "remonder-app",
  storageBucket: "remonder-app.appspot.com",
  messagingSenderId: "886786404472",
  appId: "1:886786404472:web:f586503545b00422463d8d",
  measurementId: "G-P443FV62N5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
