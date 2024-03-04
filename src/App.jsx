import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item.name !== itemToRemove.name));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Header />
      <Section addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default App;


