import React, { useEffect, useState } from 'react';
import { HiOutlineArchive } from 'react-icons/hi';
import { IoVideocamSharp } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBinFill, RiNotificationSnoozeFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(f => f.id == id);
        setFriend(selected);
      });
  }, [id]);

  if (!friend) return <p className="text-center">Loading...</p>;

  return (
    
   <div className="min-h-screen bg-slate-50 p-4 
   md:p-8 font-sans text-slate-700">
  <div className="flex justify-end mb-6">
   
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
    
    <div className="lg:col-span-4 space-y-4">
      <div className="card bg-white border border-slate-100 shadow-sm 
        p-8 flex flex-col items-center text-center">
        <div className="avatar mb-4">
          <div className="w-24 rounded-full ring ring-slate-100 ring-offset-2">
            <img src={friend.picture} alt="picture" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>
        <div className="flex gap-2 mt-2">
          <span className="badge badge-error badge-sm 
          text-white text-[10px] py-2">{friend.tags}</span> 
        </div>
        <p className="italic text-slate-400 text-sm mt-4">
        "Former colleague, great mentor"</p>
        <p className="text-xs text-slate-400 mt-1"
        >Preferred: {friend.email}</p>
      </div>

      <div className="space-y-2">
        <button className="btn btn-block bg-white border-slate-100 hover:bg-slate-50 
        text-slate-600 normal-case font-medium shadow-sm">
           <RiNotificationSnoozeFill />
          Snooze 2 Weeks
        </button>

        <button className="btn btn-block bg-white border-slate-100 hover:bg-slate-50
         text-slate-600 normal-case font-medium shadow-sm">
            <HiOutlineArchive />
          Archive
        </button>

        <button className="btn btn-block bg-white border-slate-100 hover:bg-red-50 
        text-red-500 normal-case font-medium shadow-sm border-none">
          <RiDeleteBinFill />
          Delete
        </button>
      </div>
    </div>

    <div className="lg:col-span-8 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-white border border-slate-100 shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-emerald-800">
            {friend.days_since_contact}</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">
            days_since_contact {friend.days_since_contact}</div>
        </div>
        <div className="card bg-white border border-slate-100 shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-emerald-800">30</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">
            {friend.goal} Goal (Days)</div>
        </div>
        <div className="card bg-white border border-slate-100 shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-emerald-800 text-nowrap">
            {friend.next_due_date}</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">
            Next Due</div>
        </div>
      </div>

      <div className="card bg-white border border-slate-100 shadow-sm p-6 relative">
        <button className="btn btn-xs absolute right-4 top-4 bg-slate-50 border-slate-200
         text-slate-500 hover:bg-slate-100 normal-case font-normal">Edit</button>
        <h3 className="font-bold text-emerald-800">Relationship Goal</h3>
        <p className="text-sm mt-2 text-slate-600">Connect every <span 
        className="font-bold text-slate-800">30 days</span></p>
      </div>

      <div className="card bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-bold text-emerald-800 mb-4">Quick Check-In</h3>
        <div className="grid grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center p-4 rounded-xl
           bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">

            <span className="text-xs font-medium">
            <LuPhoneCall  /> Call
                </span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 rounded-xl
           bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">

            <span className="text-xs font-medium">
             <MdOutlineTextsms />Text
                </span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 rounded-xl
           bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
           
            <span className="text-xs font-medium">
              <IoVideocamSharp /> Video
                </span>
          </button>
        </div>
      </div>

    </div>
  </div>

  <div >
  
  </div>
</div>

  );
};

export default FriendDetails; 