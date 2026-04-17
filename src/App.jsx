import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { FriendProvider } from './context/FriendContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound'; // Custom 404 Page


import './App.css';
import './media.css'; // Global Responsiveness

function App() {
  return (
    <FriendProvider>
      <Router>
        


        <div className="app-wrapper">
          
      
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