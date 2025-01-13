import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseconfig";
import { getAuth, signOut } from "firebase/auth";


const provider = new GoogleAuthProvider();

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered: ", userCredential.user);
  } catch (error) {
    console.error("Error during registration: ", error.message);
    throw error; // Renvoyer l'erreur pour l'afficher dans l'UI
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in: ", userCredential.user);
  } catch (error) {
    console.error("Error during login: ", error.message);
    throw error; // Renvoyer l'erreur pour l'afficher dans l'UI
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User logged in with Google: ", result.user);
    return result.user; // Retourne l'utilisateur pour l'utiliser dans l'interface
  } catch (error) {
    console.error("Error during Google login: ", error.message);
    throw error; // Renvoyer l'erreur pour l'afficher dans l'UI
  }
};


export const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Déconnexion réussie");
      window.location.href = "/"; // Redirige vers la page d'accueil ou de connexion
    })
    .catch((error) => {
      console.error("Erreur lors de la déconnexion :", error);
    });
};

export const handleGoogleLogout = () => {
  // Supprime uniquement les données liées à Google du localStorage
  localStorage.removeItem("googleUser");
};
