import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { FriendProvider } from './context/FriendContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';

// Styles
import './App.css';
import './media.css';

const NotFound = () => (
  <div className="error-page">
    <h1 className="error-code">404</h1>
    <p className="error-message">Oops! This page doesn't exist.</p>
    <Link to="/" className="back-home-link">Go back home</Link>
  </div>
);

function App() {
  return (
    <FriendProvider>
      <Router>
        <div className="app-wrapper">
          <Toaster position="top-right" />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FriendProvider>
  );
}

export default App;