import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import { FadeLoader } from 'react-spinners';

const FriendCard = () => {

   

     const [friends , setFriend] = useState([]);
     const [loading , setLoading] = useState(true)

    useEffect(()=> {

        const fetchData = async() =>{
          const res = await fetch('/friends.json')
          const data = await res.json();
          console.log(data);
          setFriend(data)
          setLoading(false)
        } ;
        fetchData()
      
    }, [] )

    console.log('friend', friends);
    console.log(loading , 'loading');

    return (
        <div className='mb-20 max-w-7xl mx-auto'>
           <div>
             <h2 className='font-bold text-2xl'>Your Friends</h2>
           </div>
           
         {loading? ( <div className=' flex justify-center items-center'>
          <FadeLoader color='#244D3F' />
          </div>
          ) 
         :(
          <div className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-4 gap-6">
            {
            friends.map((friend , index)=>{
                 return (
                  <Card friend={friend} key={index}  ></Card>
                  );
            })}
           </div>)}

        </div>
    );
};

export default FriendCard; 