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

const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-bold text-[#1e3a34]">404</h1>
    <p className="text-xl text-gray-500 my-4">Oops! This page doesn't exist.</p>
    <a href="/" className="text-emerald-600 underline">Go back home</a>
  </div>
);

function App() {
  return (
    <FriendProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#f9fafb]">
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-grow">
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