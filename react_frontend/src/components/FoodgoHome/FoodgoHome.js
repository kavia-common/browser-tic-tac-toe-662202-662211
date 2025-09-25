import React, { useState } from 'react';
import './FoodgoHome.css';

const FoodgoHome = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleFavoriteClick = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  const handleNavClick = (e) => {
    if (!e.currentTarget.classList.contains('add-btn')) {
      e.preventDefault();
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => item.classList.remove('active'));
      e.currentTarget.classList.add('active');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Foodgo</h1>
          <p className="tagline">Order your favourite food!</p>
        </div>
        <div className="header-profile">
          <img src="/assets/figma_image_1_53.png" alt="Profile" className="profile-image" />
          <img src="/assets/figma_image_1_54.png" alt="User" className="user-image" />
        </div>
      </header>

      <div className="search-bar">
        <div className="search-input">
          <img src="/assets/figma_image_1_61_405_994.png" alt="Search" className="search-icon" />
          <span>Search</span>
        </div>
        <div className="filter-button">
          <img src="/assets/figma_image_1_59_405_998.png" alt="Filter" className="filter-icon" />
        </div>
      </div>

      <nav className="categories">
        {['All', 'Combos', 'Sliders', 'Classic'].map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <main className="food-grid">
        {[
          {
            id: 1,
            image: '/assets/figma_image_1_83.png',
            title: "Cheeseburger Wendy's Burger",
            rating: 4.9
          },
          {
            id: 2,
            image: '/assets/figma_image_1_92.png',
            title: 'Hamburger Veggie Burger',
            rating: 4.8
          },
          {
            id: 3,
            image: '/assets/figma_image_1_101.png',
            title: 'Hamburger Chicken Burger',
            rating: 4.6
          },
          {
            id: 4,
            image: '/assets/figma_image_1_110.png',
            title: 'Hamburger Fried Chicken Burger',
            rating: 4.5
          }
        ].map(food => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.title} className="food-image" />
            <div className="food-info">
              <h3>{food.title}</h3>
              <div className="rating">
                <img src="/assets/figma_image_1_85_406_3368.png" alt="Star" className="star-icon" />
                <span>{food.rating}</span>
              </div>
            </div>
            <button className="favorite-btn" onClick={handleFavoriteClick}>
              <img src="/assets/figma_image_1_80_405_612.png" alt="Heart" className="heart-icon" />
            </button>
          </div>
        ))}
      </main>

      <nav className="bottom-nav">
        <button className="nav-item active" onClick={handleNavClick}>
          <img src="/assets/figma_image_1_123_405_619.png" alt="Home" className="nav-icon" />
          <div className="nav-indicator"></div>
        </button>
        <button className="nav-item" onClick={handleNavClick}>
          <img src="/assets/figma_image_1_124_405_1279.png" alt="User" className="nav-icon" />
        </button>
        <button className="nav-item add-btn">
          <div className="add-icon">+</div>
        </button>
        <button className="nav-item" onClick={handleNavClick}>
          <img src="/assets/figma_image_1_125_405_300.png" alt="Comments" className="nav-icon" />
        </button>
        <button className="nav-item" onClick={handleNavClick}>
          <img src="/assets/figma_image_1_122_406_1116.png" alt="Favorites" className="nav-icon" />
        </button>
      </nav>
    </div>
  );
};

export default FoodgoHome;
