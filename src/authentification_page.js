import React, { useState } from "react";
import { registerUser, loginUser, loginWithGoogle } from "./authservice";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate
import "./authentification_page.css";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // État pour le message d'erreur

  const navigate = useNavigate(); // Initialisation du hook useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Réinitialise le message d'erreur

    try {
      if (isLogin) {
        await loginUser(email, password);
      } else {
        await registerUser(email, password);
      }
      navigate("/Area"); // Redirige l'utilisateur vers /Area après connexion
    } catch (error) {
      // Gère les erreurs spécifiques
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Mot de passe incorrect.");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("Utilisateur non trouvé.");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Cet email est déjà utilisé.");
      } else {
        setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMessage(""); // Réinitialise le message d'erreur
    try {
      await loginWithGoogle();
      navigate("/Area"); // Redirige l'utilisateur vers /Area après connexion avec Google
    } catch (error) {
      setErrorMessage("Erreur lors de la connexion avec Google.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Affiche l'erreur */}
        </form>
        <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
        <button onClick={handleGoogleLogin} className="google-btn">
          Se connecter avec Google
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
