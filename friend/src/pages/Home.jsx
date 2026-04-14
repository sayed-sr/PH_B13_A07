import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import friendsData from '../data/friends.json';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Req 10.2
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="flex h-96 items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#1e3a34] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Banner Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#1e3a34] mb-4">Friends to keep close in your life</h1>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#1e3a34] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#152925]">
          <span className="text-xl">+</span> Add a Friend
        </button>
      </section>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: 'Total Friends', val: 10 },
          { label: 'On Track', val: 4 },
          { label: 'Need Attention', val: 6 },
          { label: 'Interactions', val: 12 }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
            <h2 className="text-4xl font-bold mb-1">{item.val}</h2>
            <p className="text-gray-400 text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {friendsData.map(friend => (
          <Link to={`/friend/${friend.id}`} key={friend.id} className="group">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm group-hover:shadow-md transition-all">
              <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-50" alt={friend.name} />
              <h3 className="font-bold text-lg">{friend.name}</h3>
              <p className="text-gray-400 text-xs mb-3">{friend.days_since_contact}d ago</p>
              <div className="flex justify-center gap-2 mb-4">
                {friend.tags.map(tag => (
                  <span key={tag} className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <div className={`py-1 rounded-full text-white text-xs font-bold capitalize
                ${friend.status === 'overdue' ? 'bg-red-500' : friend.status === 'almost due' ? 'bg-orange-400' : 'bg-emerald-600'}`}>
                {friend.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;