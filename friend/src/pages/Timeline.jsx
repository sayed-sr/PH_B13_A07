import React, { useState } from 'react';
import { useFriends } from '../context/FriendContext';
import { Search, Filter } from 'lucide-react';

const Timeline = () => {
  const { timeline } = useFriends();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  // Filtering and Searching logic
  const filteredTimeline = timeline.filter(entry => {
    const matchesFilter = filter === 'All' || entry.type === filter;
    const matchesSearch = entry.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (type) => {
    if (type === 'Call') return '/assets/call.png';
    if (type === 'Text') return '/assets/text.png';
    return '/assets/video.png';
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="text-4xl font-bold text-[#1e3a34]">Timeline</h1>
        
        <div className="flex gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="pl-10 pr-4 py-2 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          {/* Filter Dropdown */}
          <select 
            className="border p-2 rounded-xl bg-white focus:outline-none"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
        </div>
      </div>

      {/* Timeline List */}
      <div className="flex flex-col gap-4">
        {filteredTimeline.length > 0 ? (
          filteredTimeline.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-6 shadow-sm animate-fadeIn">
              <div className="bg-gray-50 p-3 rounded-xl">
                <img src={getIcon(item.type)} className="w-8 h-8" alt={item.type} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {item.type} with {item.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <img src="/assets/text.png" className="w-16 h-16 mx-auto mb-4 opacity-20 grayscale" alt="Empty" />
            <h3 className="text-xl font-bold text-gray-400">No interactions logged yet</h3>
            <p className="text-gray-400">Head to a friend's profile to start a check-in!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;