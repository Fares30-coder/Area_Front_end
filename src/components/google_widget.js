import React, { useState, useEffect } from "react";
import { loginWithGoogle, handleGoogleLogout } from "../authservice";

const GoogleWidget = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur est connecté à Google
    const user = JSON.parse(localStorage.getItem("googleUser"));
    setIsConnected(!!user); // Définit `true` si un utilisateur est trouvé
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      localStorage.setItem("googleUser", JSON.stringify(user)); // Stocke l'utilisateur
      setIsConnected(true);
      alert(`Connecté en tant que : ${user.email}`);
    } catch (error) {
      console.error("Erreur lors de la connexion avec Google :", error.message);
      alert("Erreur lors de la connexion avec Google.");
    }
  };

  const handleGoogleLogoutClick = () => {
    handleGoogleLogout(); // Supprime uniquement les données liées à Google
    setIsConnected(false); // Met à jour l'état local
    alert("Déconnecté de Google.");
  };

  return (
    <div className="google-widget">
      <h3>Service Google</h3>
      {isConnected ? (
        <>
          <p>Connecté avec Google</p>
          <button onClick={handleGoogleLogoutClick} className="disconnect-button">
            Se déconnecter
          </button>
        </>
      ) : (
        <button onClick={handleGoogleLogin} className="connect-button">
          Se connecter avec Google
        </button>
      )}
    </div>
  );
};

export default GoogleWidget;
