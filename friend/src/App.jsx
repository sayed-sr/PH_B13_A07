import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import NotFound from './pages/NotFound'; // Custom 404 Page

// Global Styles
import './App.css';
import './media.css'; // Global Responsiveness

function App() {
  return (
    <FriendProvider>
      <Router>
        {/* main-layout-wrapper ensures the background and flex-structure are global */}
        <div className="app-wrapper">
          
          {/* Feedback notifications for user interactions */}
          <Toaster 
            position="top-right" 
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
              },
            }} 
          />

          <Navbar />

          {/* main-content uses flex-grow to push the footer to the bottom */}
          <main className="main-content">
            <Routes>
              {/* Dashboard / Friend List */}
              <Route path="/" element={<Home />} />

              {/* Individual Friend Profile */}
              <Route path="/friend/:id" element={<FriendDetails />} />

              {/* History of Interactions */}
              <Route path="/timeline" element={<Timeline />} />

              {/* Data Visualization */}
              <Route path="/stats" element={<Stats />} />

              {/* 404 Catch-all: Must be the last Route */}
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