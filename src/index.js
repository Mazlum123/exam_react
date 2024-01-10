// Import de la fonction createRoot depuis 'react-dom/client'
import { createRoot } from 'react-dom/client';

// Import du composant App et du fichier de styles CSS
import App from './App';
import './styles/style.css';

// Création de la racine de l'application dans l'élément HTML avec l'ID 'root'
const root = createRoot(document.querySelector('#root'));

// Rendu du composant App dans la racine de l'application
root.render(<App />);
