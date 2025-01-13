import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AreaPage.css";
import GitHubWidget from "./components/github_widget";
import GoogleWidget from "./components/google_widget";
import { handleLogout } from "./authservice";
import { FaGithub, FaGoogle, FaTwitter, FaCog, FaLink } from 'react-icons/fa';


function AreaPage() {
  const navigate = useNavigate();

  const [services, setServices] = useState([
    { id: '1', name: 'GitHub', connected: true, icon: <FaGithub /> },
    { id: '2', name: 'Google', connected: true, icon: <FaGoogle /> },
    { id: '3', name: 'Twitter', connected: false, icon: <FaTwitter /> },
  ]);

  const [areas, setAreas] = useState([
    {
      id: '1',
      name: 'Nouveau commit à tweet',
      action: 'Nouveau commit GitHub',
      reaction: 'Poster un tweet',
    },
    {
      id: '2',
      name: 'Nouvel email à notification Slack',
      action: 'Nouveau email Gmail',
      reaction: 'Envoyer une notification Slack',
    },
  ]);

  const goToServicePage = () => {
    navigate("/services");
  };

  const configureArea = () => {
    navigate("/configure-area");
  };

  const toggleService = (id) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, connected: !service.connected } : service
      )
    );
  };

  return (
    <div className="area-page">
      <header className="area-header">
        <h1>Bienvenue sur Notre AREA AREA</h1>
        <p>Automatisez vos tâches et connectez vos services préférés en un clic.</p>
        <button onClick={handleLogout} className="logout-button">
          Déconnexion
        </button>@
      </header>
      <main className="area-content">
        <div className="dashboard-grid">
          <section className="widgets-container">
            <h2>Widgets</h2>
            <div className="widgets-grid">
              <GitHubWidget />
              <GoogleWidget />
            </div>
          </section>

          <section className="services-container">
            <h2>Services Connectés</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-item">
                  <div className="service-info">
                    {service.icon}
                    <span>{service.name}</span>
                  </div>
                  <button
                    onClick={() => toggleService(service.id)}
                    className={`toggle-button ${service.connected ? 'connected' : ''}`}
                  >
                    {service.connected ? 'Connecté' : 'Déconnecté'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="areas-container">
            <h2>Vos AREAs</h2>
            <div className="areas-list">
              {areas.map((area) => (
                <div key={area.id} className="area-item">
                  <h3>{area.name}</h3>
                  <p>
                    Si <span className="action">{area.action}</span>, alors{' '}
                    <span className="reaction">{area.reaction}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="cta-container">
          <button className="cta-button" onClick={configureArea}>
            <FaCog /> Configurer une AREA
          </button>
          <button className="cta-button" onClick={goToServicePage}>
            <FaLink /> Gérer mes services
          </button>
        </div>
      </main>
      <footer className="area-footer">
        <p>&copy; 2024 AREA Platform. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default AreaPage;