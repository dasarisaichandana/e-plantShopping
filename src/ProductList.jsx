import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch();

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies the air and has healing properties for skin.",
          cost: "$14"
        }
      ]
    }
  ];

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={handleHomeClick}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div className="ul">
          <div>
            <a href="#" onClick={handlePlantsClick} className="nav-link">Plants</a>
          </div>
          <div style={{ position: 'relative' }}>
            <a href="#" onClick={handleCartClick} className="nav-link">
              <h1 className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                  <rect width="256" height="256" fill="none" />
                  <circle cx="80" cy="216" r="12" fill="#fff" />
                  <circle cx="184" cy="216" r="12" fill="#fff" />
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </h1>
            </a>
            {totalItems > 0 && (
              <span className="cart_quantity_count">{totalItems}</span>
            )}
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((section, idx) => (
            <div key={idx} className="plant-category">
              <div className="plantname_heading">
                <h2 className="plant_heading">{section.category}</h2>
              </div>
              <div className="product-list">
                {section.plants.map((plant, index) => (
                  <div key={index} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3 className="product-title">{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-price"><strong>{plant.cost}</strong></p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                      className={`product-button ${isInCart(plant.name) ? 'added-to-cart' : ''}`}
                    >
                      {isInCart(plant.name) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

ProductList.propTypes = {
  onHomeClick: PropTypes.func
};

export default ProductList;
