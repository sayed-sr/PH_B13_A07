import React, { createContext, useState, useContext } from 'react';

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  // Start with an empty array as requested
  const [timeline, setTimeline] = useState([]);

  const addInteraction = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type, // 'Call', 'Text', or 'Video'
      name: friendName,
      date: new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    };
    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <FriendContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => useContext(FriendContext);