import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FriendCard.css';

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  // We convert the status string (e.g., "almost due") to a CSS class friendly format (e.g., "status-almost-due")
  const statusClass = `status-${friend.status.toLowerCase().replace(' ', '-')}`;

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="friend-card-container"
    >
      {/* Profile Picture */}
      <div className="avatar-wrapper">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="friend-avatar"
        />
      </div>

      {/* Friend Name & Last Contact */}
      <h3 className="friend-name">{friend.name}</h3>
      <p className="contact-days">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="friend-tags">
        {friend.tags.map((tag, index) => (
          <span key={index} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <div className={`status-badge ${statusClass}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;