import React from 'react';
import { useParams } from 'react-router-dom';
import friendsData from '../data/friends.json';
import { useFriends } from '../context/FriendContext';
import toast from 'react-hot-toast';
import './FriendDetails.css';

const FriendDetails = () => {
  const { id } = useParams();

  const { addInteraction } = useFriends();
  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) return <div className="error-container">Friend not found.</div>;

  const handleAction = (type) => {
    addInteraction(type, friend.name);

    toast.success(`${type} interaction logged with ${friend.name}!`);
  };

  return (
    <div className="details-page-container">
      
      <div className="left-column">
        <div className="profile-main-card">
          <img src={friend.picture} className="profile-large-img" alt={friend.name} />
          <h2 className="profile-name-title">{friend.name}</h2>
          <div className="badge-row">
             <span className="status-pill overdue-pill">{friend.status}</span>

             <span className="status-pill tag-pill-detail">{friend.tags[0]}</span>
          </div>
          <p className="profile-bio">"{friend.bio}"</p>
          <p className="profile-email">Preferred: {friend.email}</p>
        </div>

        <div className="action-buttons-stack">
          <button className="secondary-btn">
            <img src="/assets/logo.png" className="btn-icon-small" /> Snooze 2 Weeks
          </button>

          <button className="secondary-btn">Archive</button>
          <button className="danger-btn">Delete</button>
        </div>
      </div>

      
      <div className="right-column">
       
        <div className="stats-row">
          <div className="stat-box">
                    <h4 className="stat-value">{friend.days_since_contact}</h4>
            <p className="stat-label">Days Since Contact</p>
          </div>
          <div className="stat-box">
            <h4 className="stat-value">{friend.goal}</h4>
              <p className="stat-label">Goal (Days)</p>
          </div>
          <div className="stat-box accent-text">
            <h4 className="stat-value">{friend.next_due_date}</h4>
   <p className="stat-label">Next Due</p>
          </div>
        </div>

       
        <div className="goal-card">
          <div>
                <h3 className="card-heading">Relationship Goal</h3>
            <p className="card-subtext">Connect every <strong>{friend.goal} days</strong></p>
          </div>

          <button className="edit-btn">Edit</button>
        </div>

        
        <div className="check-in-card">
          <h3 className="card-heading margin-bottom">Quick Check-In</h3>
          <div className="check-in-grid">

            <button onClick={() => handleAction('Call')} className="check-in-btn">
              <img src="/assets/call.png" alt="Call" />
              <span>Call</span>
      </button>
            <button onClick={() => handleAction('Text')} className="check-in-btn">
              <img src="/assets/text.png" alt="Text" />
                   <span>Text</span>
            </button>

            <button onClick={() => handleAction('Video')} className="check-in-btn">
              <img src="/assets/video.png" alt="Video" />
              <span>Video</span>
            </button>
      </div>
       </div>
      </div>
    </div>
  );
};

export default FriendDetails;