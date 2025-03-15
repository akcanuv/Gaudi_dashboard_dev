// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5tCT7pdHk_K1W2Z4KcZ9RAsM88M5g9xk",
  authDomain: "signin-temp-9b111.firebaseapp.com",
  projectId: "signin-temp-9b111",
  storageBucket: "signin-temp-9b111.firebasestorage.app",
  messagingSenderId: "357701117096",
  appId: "1:357701117096:web:a6a426c5a09a56512c0e9d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const outlookProvider = new OAuthProvider('microsoft.com');

// export { auth, googleProvider, outlookProvider };

export { auth, googleProvider };


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyByLOjOXr683EWH03ONf9zo55Lb8mmAX9k",
//   authDomain: "buddhiyantra-dev.firebaseapp.com",
//   projectId: "buddhiyantra-dev",
//   storageBucket: "buddhiyantra-dev.firebasestorage.app",
//   messagingSenderId: "920619260429",
//   appId: "1:920619260429:web:181a63b3159041c3459344"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC5tCT7pdHk_K1W2Z4KcZ9RAsM88M5g9xk",
//   authDomain: "signin-temp-9b111.firebaseapp.com",
//   projectId: "signin-temp-9b111",
//   storageBucket: "signin-temp-9b111.firebasestorage.app",
//   messagingSenderId: "357701117096",
//   appId: "1:357701117096:web:a6a426c5a09a56512c0e9d"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

//change the api keys to Signin-temp if not working