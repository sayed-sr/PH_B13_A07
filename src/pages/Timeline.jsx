import React, { useState } from 'react';
import { useFriends } from '../context/FriendContext';
import { Search } from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
       const { timeline } = useFriends();
  const [filter, setFilter] = useState('All');

  const [search, setSearch] = useState('');

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
    <div className="timeline-page-wrapper">
                       <div className="timeline-header">
        <h1 className="timeline-title">Timeline</h1>
        
        <div className="timeline-controls">
        
          <div className="search-container">
            <Search className="search-icon" size={18} />
          
             <input 
              type="text" 
              placeholder="Search contacts..." 
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
       
          <select 
            className="filter-dropdown"
            onChange={(e) => setFilter(e.target.value)}
          >
      <option value="All">All Types</option>
            <option value="Call">Calls</option>
                 <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
        </div>
      </div>

  
      <div className="timeline-list">
        {filteredTimeline.length > 0 ? (
            filteredTimeline.map((item) => (
            <div key={item.id} className="timeline-item shadow-hover">
      <div className="icon-box">



                <img src={getIcon(item.type)} className="type-icon" alt={item.type} />
              </div>
      <div className="item-content">
                <h3 className="item-title">
                  {item.type} with {item.name}
                </h3>
                <p className="item-date">{item.date}</p>
      </div>
            </div>
          ))
        ) : (
          <div className="empty-state">

            <img src="/assets/text.png" className="empty-icon" alt="Empty" />
    <h3 className="empty-title">No interactions logged yet</h3>
            <p className="empty-text">Head to a friend's profile to start a check-in!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;