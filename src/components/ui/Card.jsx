import React from 'react';
import { useNavigate } from 'react-router';



const Card = ({ friend }) => {
  const navigate = useNavigate();

    return (
        
          <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card w-64 bg-base-100 border
      border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
      p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition"
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
        
        {/* TAG FIX */}
        <div className="bg-emerald-100 text-emerald-700 px-4 py-2 text-xs rounded">
          {friend.tags.join(", ")}
        </div>

        {/* STATUS */}
        <div className="badge badge-lg bg-orange-400 text-white px-6 py-2 rounded-full">
          {friend.status}
        </div>

      </div>
    </div>
    );
};

export default Card;