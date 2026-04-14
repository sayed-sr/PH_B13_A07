import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useFriends } from '../context/FriendContext';

const Stats = () => {
  const { timeline } = useFriends();

  const data = [
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  const COLORS = ['#8b5cf6', '#1e3a34', '#22c55e'];

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12">Friendship Analytics</h1>
      <div className="bg-white p-12 rounded-3xl border shadow-sm flex flex-col items-center">
        <h3 className="self-start text-gray-500 font-bold mb-8">By Interaction Type</h3>
        <div className="w-full h-[400px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} innerRadius={100} outerRadius={140} paddingAngle={5} dataKey="value">
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