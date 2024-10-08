import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ArtworkList from './components/ArtworkList';
import CreateArtwork from './components/CreateArtwork';
import AdminHomePage from './Admin/AdminHomePage';
import ArtistHomePage from './Artist/ArtistHomePage';
import CuratorHomePage from './Curator/CuratorHomePage';
import VisitorHomePage from './Visitor/VisitorHomePage';
import CartPage from './components/CartPage'; // Ensure correct import
import Navbar from './components/Navbar';
import AboutPage from './components/About';

const App = () => {
  // Initialize cartItems as an empty array
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/artworks" element={<ArtworkList setCartItems={setCartItems} cartItems={cartItems} />} />
          <Route path="/create" element={<CreateArtwork />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
          
          {/* Role-based routes */}
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/artist" element={<ArtistHomePage />} />
          <Route path="/curator" element={<CuratorHomePage />} />
          <Route path="/visitor" element={<VisitorHomePage />} />
        </Routes>
        <p style={{textAlign:"center"}}>&copy; {new Date().getFullYear()} Art Gallery. All rights reserved.</p>
      </div>

    </Router>
  );
};

export default App;
