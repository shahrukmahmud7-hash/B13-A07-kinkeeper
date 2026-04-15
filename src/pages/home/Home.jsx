import React from 'react';

const Home = () => {



  
    return (
   <div>
      {/* Banner */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 mt-2">
          Track and manage your relationships easily
        </p>
        <button className="mt-4 bg-[#244D3F]
         text-white px-4 py-2 rounded">
          + Add Friend
        </button>

     <div class="p-8  max-w-7xl mx-auto mt-12">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    
           <div class="card bg-base-100 shadow-sm border
            border-gray-100 py-8 text-center">
            <div class="text-4xl font-bold text-emerald-900">10</div>
             <div class="text-slate-500 text-sm mt-2">Total Friends</div>
        </div>

       <div class="card bg-base-100 shadow-sm border
        border-gray-100 py-8 text-center">
         <div class="text-4xl font-bold text-emerald-900">3</div>
         <div class="text-slate-500 text-sm mt-2">On Track</div>
      </div>

        <div class="card bg-base-100 shadow-sm border
         border-gray-100 py-8 text-center">
          <div class="text-4xl font-bold text-emerald-900">6</div>
          <div class="text-slate-500 text-sm mt-2">Need Attention</div>
       </div>

        <div class="card bg-base-100 shadow-sm border
         border-gray-100 py-8 text-center">
          <div class="text-4xl font-bold text-emerald-900">12</div>
      <div class="text-slate-500 text-sm mt-2">Interactions This Month</div>
    </div>

       </div>
    </div>
      </div>
    </div>
    );
};

export default Home; 