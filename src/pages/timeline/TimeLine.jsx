import React, { useState } from 'react';
import { useFriendActivity } from '../../context/FriendActivityContext';


const TimeLine = () => {

  const { activities } = useFriendActivity();
  const [activityType , setActivityType ] = useState("")
  const [isOpen , setIsOpen] = useState(false)
  
  const filterActivity = activityType ? activities.filter((activity)=> 
    activity.type===activityType) : activities 

  const toggleActivity = (type)=> {
    setActivityType(type)
    setIsOpen(false)
  }

  const getEmoji = (type) => {
  if (type === "call") return "📞";
  if (type === "text") return "💬";
  if (type === "video") return "🎥";
  return "❓";
};

    return (
         <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Activity Timeline</h2>

    <div className={`dropdown ${isOpen? 'dropdown-open' : 'dropdown-close'}`}>
      <div tabIndex={0} role="button" className="btn m-1" 
      onClick={()=> setIsOpen(true)} >Filter Timeline</div>
      <ul tabIndex="-1" className="dropdown-content menu 
      bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
    <li>
        <a onClick={()=> toggleActivity("call") }>Call</a>
    </li>
    <li>
      <a onClick={()=>toggleActivity("text")}>Text</a>
    </li>
    <li>
        <a onClick={()=> toggleActivity("video")}>Video</a> 
     </li>
  </ul>
</div>

      {filterActivity.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-3">
          {filterActivity.map((item) => (
            <div
              key={item.id}
              className="card bg-white border border-slate-100 
              shadow-sm p-4 flex flex-row items-center gap-4 rounded-xl"
            >
             
              <div className="bg-slate-50 p-2.5 rounded-full border
             border-slate-100 flex items-center justify-center">
                 {getEmoji(item.type)}
              </div>

             
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-emerald-800 
                  text-sm capitalize">
                    {/* {getEmoji(item.type)} */}
                  </span>
                  <span className="text-slate-400 text-xs 
                  font-normal">with {item.friendName}</span>
                </div>
                <span className="text-slate-400 text-[11px] mt-0.5">
              April : {item.time} </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    );
};

export default TimeLine; 
