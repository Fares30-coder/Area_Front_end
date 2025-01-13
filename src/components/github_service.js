import axios from "axios";

export const getGitHubStatus = async () => {
  const response = await axios.get("http://localhost:3001/user/services");
  return response.data.github; // { connected: true/false }
};

export const connectGitHub = () => {
  window.location.href = "http://localhost:3001/auth/github"; // Redirection OAuth
};

export const disconnectGitHub = async () => {
  await axios.delete("http://localhost:3001/user/services/github");
};
