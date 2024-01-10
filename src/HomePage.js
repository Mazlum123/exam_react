import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Définition des données de catégories
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

  return (
    <div>
      <div className="header">
        {categories.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
      <div className="content">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <ul className="item-list">
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
