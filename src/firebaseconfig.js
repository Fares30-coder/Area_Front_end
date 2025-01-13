
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 


const firebaseconfig = {
  apiKey: "AIzaSyA-dn85hz1lXPWh4d1BMMqVa2gTDOZrmEo",
  authDomain: "area2-ba090.firebaseapp.com",
  projectId: "area2-ba090",
  storageBucket: "area2-ba090.appspot.com",
  messagingSenderId: "811700901889",
  appId: "1:811700901889:web:b12620a7e70915c2cac800",
  measurementId: "G-Q7DYPKS4JH"
};


const app = initializeApp(firebaseconfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  

export { auth };
