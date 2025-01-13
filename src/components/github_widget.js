import React, { useState, useEffect } from "react";
import { connectGitHub, disconnectGitHub, getGitHubStatus } from "./github_service";

const GitHubWidget = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkGitHubStatus = async () => {
      try {
        const status = await getGitHubStatus();
        setIsConnected(status.connected); // Vérifie si GitHub est connecté
      } catch (error) {
        console.error("Erreur lors de la vérification du statut GitHub :", error.message);
      }
    };

    checkGitHubStatus();
  }, []);

  const handleConnect = async () => {
    try {
      connectGitHub(); // Redirection pour l'authentification GitHub
    } catch (error) {
      console.error("Erreur lors de la connexion à GitHub :", error.message);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectGitHub();
      setIsConnected(false); // Met à jour l'état local
      alert("Déconnecté de GitHub avec succès.");
    } catch (error) {
      console.error("Erreur lors de la déconnexion de GitHub :", error.message);
      alert("Erreur lors de la déconnexion de GitHub.");
    }
  };

  return (
    <div className="github-widget">
      <h3>Service GitHub</h3>
      {isConnected ? (
        <>
          <p>Connecté à GitHub</p>
          <button onClick={handleDisconnect} className="disconnect-button">
            Se déconnecter
          </button>
        </>
      ) : (
        <button onClick={handleConnect} className="connect-button">
          Se connecter à GitHub
        </button>
      )}
    </div>
  );
};

export default GitHubWidget;
