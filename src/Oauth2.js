import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function OAuth2Login() {
    const handleGoogleLogin = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Connexion réussie en tant que : ${result.user.email}`);
        } catch (error) {
            console.error("Erreur :", error.message);
            alert("Erreur lors de la connexion avec Google.");
        }
    };

    return (
        <div>
            <button onClick={handleGoogleLogin}>Se connecter avec Google</button>
        </div>
    );
}

export default OAuth2Login;




const jwt = require('jsonwebtoken');

// Générer un token JWT
function generateToken(userId) {
  const payload = { userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

// Vérifier un token JWT
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Token invalide');
  }
}


