import React from 'react';
import { useNavigate } from 'react-router';



const Card = ({ friend }) => {
  const navigate = useNavigate();

    return (
        
          <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card w-64 bg-base-100 border
      border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
      p-6 flex flex-col items-center
      cursor-pointer hover:scale-105 transition"
    >
      <div className="avatar mb-4">
        <div className="w-24 rounded-full">
          <img src={friend.picture} alt="picture" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-800">
          {friend.name}
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          {friend.days_since_contact}d ago
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2">

        <div className='flex gap-2 '>
           {friend.tags.map(tag => (
        
        <div className="bg-emerald-100 text-emerald-700
         px-4 py-2 text-xs rounded-3xl">
          {tag}
        </div>
       ))}
        </div>

        <div className={`badge badge-lg text-white px-6 py-2 rounded-full
           ${friend.status==="On-Track" ? "bg-[#244D3F]" : 
           friend.status === "Overdue" ? "bg-[#EF4444]" : "bg-[#EFAD44]"}`}> 
          {friend.status}
        </div>

      </div>
    </div>
    );
};

export default Card; 