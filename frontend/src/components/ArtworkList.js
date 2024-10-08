
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArtworkList.css';
import img1 from '../static/god1.jpg';
import img2 from '../static/god2.jpg';
import img3 from '../static/god3.jpg';
import img4 from '../static/art2.jpg';
import img5 from '../static/paint2.jpg';
import img6 from '../static/god4.jpg';

const artworks = [
  { id: 1, artist: 'Lord Ganesha Oil Paint', cost: '$11000', imageUrl: img1 },
  { id: 2, artist: 'Vishnu and Lakshmi: The Cosmic Balance', cost: '$22900', imageUrl: img2 },
  { id: 3, artist: 'Radha and Krishna in a Serene Embrace', cost: '$13350', imageUrl: img3 },
  { id: 4, artist: 'Vigorous Fight With Enemy On Elephant', cost: '$20000', imageUrl: img4 },
  { id: 5, artist: 'Modern Art of Woman', cost: '$36600', imageUrl: img5 },
  { id: 6, artist: 'The Woman and Her Bird', cost: '$18000', imageUrl: img6 },
];

export default function ArtworkList({ setCartItems, cartItems }) {
  const [addedItems, setAddedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAddedItems(cartItems.map(item => item.id));
  }, [cartItems]);

  const handleAddToCart = (artwork) => {
    if (!addedItems.includes(artwork.id)) {
      const newCartItems = [...cartItems, artwork];
      setAddedItems([...addedItems, artwork.id]);
      setCartItems(newCartItems);
    }
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="artwork-list">
      <h1>Artworks</h1>
      <div className="artwork-container">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img src={artwork.imageUrl} alt={artwork.artist} />
            <h2>{artwork.artist}</h2>
            <p>Cost: {artwork.cost}</p>
            {addedItems.includes(artwork.id) ? (
              <button className="cart-button" onClick={handleGoToCart}>Go to Cart</button>
            ) : (
              <button className="cart-button" onClick={() => handleAddToCart(artwork)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
