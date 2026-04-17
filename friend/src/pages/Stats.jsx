import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useFriends } from '../context/FriendContext';
import './Stats.css';

const Stats = () => {
  const { timeline } = useFriends();

  const data = [
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },

    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  const COLORS = ['#8b5cf6', '#1e3a34', '#22c55e'];

  return (
    <div className="stats-page-wrapper">
      <h1 className="stats-main-title">Friendship Analytics</h1>
      

      <div className="analytics-container">

   <h3 className="chart-heading">By Interaction Type</h3>
        
                           <div className="chart-viewport">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 

                data={data} 
                innerRadius={100} 
                outerRadius={140} 
                paddingAngle={5} 
                dataKey="value"
              >
       {data.map((entry, index) => (
                  
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip />

              <Legend verticalAlign="bottom" iconType="circle" />
   </PieChart>   
   </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Stats;