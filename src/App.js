// Import des dépendances nécessaires depuis 'react-router-dom' et d'autres composants React.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import CategoryDetails from './CategoryDetails';
import Footer from './Footer';

function App() {
  // Données de catégories
  const categories = [
    {
      id: 1,
      name: "Sport",
      items: ["Football", "Basketball", "Tennis", "Natation", "Athlétisme", "Volleyball", "Rugby", "Golf", "Cyclisme", "Boxe"]
    },
    {
      id: 2,
      name: "Musique",
      items: ["Rock", "Pop", "Jazz", "Classique", "Hip-Hop", "Electro", "Reggae", "Blues", "Country", "Folk"]
    },
    {
      id: 3,
      name: "Films",
      items: ["Action", "Comédie", "Horreur", "Science-Fiction", "Drame", "Documentaire", "Animation", "Aventure", "Thriller", "Fantaisie"]
    }
  ];

  // Création du routeur avec routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage categories={categories} />,
    },
    {
      path: '/category/:id',
      element: <CategoryDetails categories={categories} />,
    },
  ]);

  // Le composant App retourne un élément div contenant le RouterProvider et le composant Footer.
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
