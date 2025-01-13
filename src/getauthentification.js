import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";

const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered: ", userCredential.user);
  } catch (error) {
    console.error("Error during registration: ", error.message);
  }
};


const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in: ", userCredential.user);
  } catch (error) {
    console.error("Error during login: ", error.message);
  }
};

export { registerUser, loginUser };
