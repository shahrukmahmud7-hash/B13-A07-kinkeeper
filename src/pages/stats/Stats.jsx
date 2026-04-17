import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useFriendActivity } from "../../context/FriendActivityContext";

const Stats = () => {

   const { activities } = useFriendActivity();
   console.log(activities , 'active');

   const textActivity = activities.filter(item => item.type === "text")
   const callActivity = activities.filter(item => item.type === "call")
   const videoActivity = activities.filter(item => item.type === "video")
  const data = [
    { name: "Text", value: textActivity.length },
    { name: "Call", value: callActivity.length },
    { name: "Videos", value: videoActivity.length},
  ];

  //  const data = activities.map(item =>({
  //   name: item.type , 
  //   value : 30
  //  }) )
  const COLORS = ["#7C3AED", "#22C55E", "#1E293B"];

  return (
    <div>
        <div className=" max-w-5xl mx-auto mt-20 
        text-xl font-bold"> 
        <h2>
          Friendship Analytics
        </h2>  
        </div>
    <div className="max-w-5xl mx-auto mb-20 flex 
       items-center justify-center">
      <div className="card w-full max-5xl-md
        bg-base-100 shadow-xl p-6">
        <p className="text-sm text-gray-500 mt-1 mb-6">
          By Interaction Type
        </p>

        <div className="flex justify-center">
          <PieChart width={260} height={260}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
              <Tooltip />
            </Pie>
          </PieChart>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex 
            items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
    </div>
  );
};

export default Stats; 