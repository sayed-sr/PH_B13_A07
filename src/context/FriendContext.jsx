import React, { createContext, useState, useContext } from 'react';

const FriendContext = createContext();



export const FriendProvider = ({ children }) => {


  const [timeline, setTimeline] = useState([]);

  const addInteraction = (type, friendName) => {
    const newEntry = {
          id: Date.now(),
      type,
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