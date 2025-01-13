import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaTwitter, FaSlack, FaTrello, FaSpotify, FaDropbox, FaJira } from 'react-icons/fa';
import './ServicePage.css'

const services = [
  { id: '1', name: 'GitHub', icon: <FaGithub />, description: 'Gérez vos dépôts et suivez vos activités GitHub.' },
  { id: '2', name: 'Google', icon: <FaGoogle />, description: 'Intégrez vos services Google comme Gmail, Calendar, et Drive.' },
  { id: '3', name: 'Twitter', icon: <FaTwitter />, description: 'Automatisez vos tweets et surveillez votre fil d\'actualité.' },
  { id: '4', name: 'Slack', icon: <FaSlack />, description: 'Envoyez et recevez des messages automatisés sur Slack.' },
  { id: '5', name: 'Trello', icon: <FaTrello />, description: 'Gérez vos tableaux et cartes Trello automatiquement.' },
  { id: '6', name: 'Spotify', icon: <FaSpotify />, description: 'Contrôlez votre musique et vos playlists.' },
  { id: '7', name: 'Dropbox', icon: <FaDropbox />, description: 'Synchronisez et gérez vos fichiers automatiquement.' },
  { id: '8', name: 'Jira', icon: <FaJira />, description: 'Suivez et mettez à jour vos tickets Jira.' },
];

function ServicesPage() {
  const navigate = useNavigate();
  const [connectedServices, setConnectedServices] = useState(['1', '2']); // IDs des services déjà connectés

  const toggleService = (id) => {
    setConnectedServices(prev => 
      prev.includes(id) ? prev.filter(serviceId => serviceId !== id) : [...prev, id]
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Gérer mes services</h1>
        <p>Connectez-vous à vos services préférés pour créer des automatisations puissantes.</p>
        <button onClick={goBack} className="back-button">Retour</button>
      </header>

      <main className="services-content">
        <section className="popular-services">
          <h2>Services populaires</h2>
          <div className="services-grid">
            {services.slice(0, 4).map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button 
                  onClick={() => toggleService(service.id)}
                  className={`connect-button ${connectedServices.includes(service.id) ? 'connected' : ''}`}
                >
                  {connectedServices.includes(service.id) ? 'Déconnecter' : 'Connecter'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="all-services">
          <h2>Tous les services</h2>
          <div className="services-list">
            {services.map(service => (
              <div key={service.id} className="service-item">
                <div className="service-info">
                  {service.icon}
                  <span>{service.name}</span>
                </div>
                <button 
                  onClick={() => toggleService(service.id)}
                  className={`toggle-button ${connectedServices.includes(service.id) ? 'connected' : ''}`}
                >
                  {connectedServices.includes(service.id) ? 'Connecté' : 'Déconnecté'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="services-footer">
        <p>&copy; 2024 AREA Platform. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default ServicesPage;

