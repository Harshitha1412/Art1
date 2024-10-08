import React from 'react';
import '../styles/CartPage.css'; // Import your CSS file for styles

export default function CartPage({ cartItems, setCartItems }) {
  // Function to remove item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Handle case when cartItems is empty
  if (cartItems.length === 0) {
    return <p style={{textAlign:"center"}}>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.artist} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.artist}</h2>
              <p>Cost: {item.cost}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
