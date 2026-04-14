import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  // Mapping status to Figma-accurate colors
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'overdue':
        return 'bg-red-500 text-white';
      case 'almost due':
        return 'bg-orange-400 text-white';
      case 'on-track':
        return 'bg-emerald-600 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-all cursor-pointer group"
    >
      {/* Profile Picture */}
      <div className="relative inline-block mb-4">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-50 group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Friend Name & Last Contact */}
      <h3 className="font-bold text-lg text-gray-800">{friend.name}</h3>
      <p className="text-gray-400 text-xs mb-3 font-medium">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <div className={`py-1.5 px-4 rounded-full text-[11px] font-bold capitalize tracking-wide shadow-sm ${getStatusStyles(friend.status)}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;