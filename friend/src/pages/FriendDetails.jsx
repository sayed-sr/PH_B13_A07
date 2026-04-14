import React from 'react';
import { useParams } from 'react-router-dom';
import friendsData from '../data/friends.json';
import { useFriends } from '../context/FriendContext';
import toast from 'react-hot-toast';

const FriendDetails = () => {
  const { id } = useParams();
  const { addInteraction } = useFriends();
  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center">Friend not found.</div>;

  const handleAction = (type) => {
    addInteraction(type, friend.name);
    toast.success(`${type} interaction logged with ${friend.name}!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-12 gap-10">
      {/* Left Column */}
      <div className="md:col-span-4 flex flex-col gap-6">
        <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
          <img src={friend.picture} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-50" />
          <h2 className="text-2xl font-bold">{friend.name}</h2>
          <div className="flex justify-center gap-2 my-2">
             <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs uppercase font-bold">{friend.status}</span>
             <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs uppercase font-bold">{friend.tags[0]}</span>
          </div>
          <p className="italic text-gray-500 my-4">"{friend.bio}"</p>
          <p className="text-sm text-gray-400">Preferred: {friend.email}</p>
        </div>

        <button className="w-full py-3 bg-white border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50">
          <img src="/src/assets/logo.png" className="w-4 h-4" /> Snooze 2 Weeks
        </button>
        <button className="w-full py-3 bg-white border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50">
          Archive
        </button>
        <button className="w-full py-3 bg-white border rounded-xl flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">
          Delete
        </button>
      </div>

      {/* Right Column */}
      <div className="md:col-span-8 flex flex-col gap-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border text-center">
            <h4 className="text-3xl font-bold">{friend.days_since_contact}</h4>
            <p className="text-xs text-gray-400">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border text-center">
            <h4 className="text-3xl font-bold">{friend.goal}</h4>
            <p className="text-xs text-gray-400">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border text-center text-emerald-600">
            <h4 className="text-xl font-bold">{friend.next_due_date}</h4>
            <p className="text-xs text-gray-400">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white p-6 rounded-2xl border flex justify-between items-center">
          <div>
            <h3 className="font-bold">Relationship Goal</h3>
            <p className="text-gray-500">Connect every <span className="font-bold text-black">{friend.goal} days</span></p>
          </div>
          <button className="px-4 py-2 border rounded-lg text-sm font-medium">Edit</button>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white p-8 rounded-2xl border">
          <h3 className="font-bold mb-6">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-6">
            <button onClick={() => handleAction('Call')} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100">
              <img src="/src/assets/call.png" className="w-8" />
              <span className="font-medium">Call</span>
            </button>
            <button onClick={() => handleAction('Text')} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100">
              <img src="/src/assets/text.png" className="w-8" />
              <span className="font-medium">Text</span>
            </button>
            <button onClick={() => handleAction('Video')} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100">
              <img src="/src/assets/video.png" className="w-8" />
              <span className="font-medium">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;