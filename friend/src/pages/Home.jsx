import React, { useState, useEffect } from 'react';
import friendsData from '../data/friends.json';
import FriendCard from '../components/FriendCard';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="loader-container">


      <div className="spinner"></div>
    </div>
  );

  return (
    <div className="home-container">
      
      <section className="hero-banner">
        <h1 className="hero-title">Friends to keep close in your life</h1>

        <p className="hero-subtitle">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="add-friend-btn">
             <span className="plus-icon">+</span> Add a Friend
        </button>
      </section>

     
      <div className="summary-grid">
        {[
          { label: 'Total Friends', val: 10 },
          { label: 'On Track', val: 4 },
      { label: 'Need Attention', val: 3 },
          { label: 'Interactions', val: 12 }
        ].map((item, idx) => (
          <div key={idx} className="summary-card">
                 <h2 className="summary-value">{item.val}</h2>

            <p className="summary-label">{item.label}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Your Friends</h2>
      
     
      <div className="friends-display-grid">

        {friendsData.map(friend => (
                   <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;