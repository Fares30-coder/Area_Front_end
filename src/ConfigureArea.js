import React, { useState } from 'react';
import axios from 'axios';
import './ConfigureArea.css'; // Ajout d'un fichier CSS pour les styles

function ConfigureArea() {
  const [email, setEmail] = useState('');
  const [repoName, setRepoName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true); // Active le chargement

    try {
      const response = await axios.post('http://localhost:3001/area', {
        userId: 'user-123', 
        action: 'github-repo-created',
        reaction: 'google-calendar-event',
        userEmail: email,
        repoName, 
      });

      setMessage('AREA configurée avec succès !');
      setEmail(''); 
      setRepoName(''); 
    } catch (error) {
      setMessage('Erreur lors de la configuration de l\'AREA. Veuillez réessayer.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="configure-area-container">
      <h1 className="title">Configurer une AREA</h1>
      <p className="subtitle">Créez une automatisation en connectant vos services.</p>

      <form className="configure-area-form" onSubmit={handleSubmit}>
        <label className="form-label">
          <span>Nom du dépôt GitHub :</span>
          <input
            type="text"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
            required
            placeholder="Entrez le nom du dépôt"
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span>Email pour les notifications :</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Entrez votre email"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Configuration...' : 'Configurer AREA'}
        </button>
      </form>

      {message && <p className={`message ${message.includes('succès') ? 'success' : 'error'}`}>{message}</p>}

      <footer className="footer">
        <p>&copy; 2024 AREA Platform. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default ConfigureArea;
