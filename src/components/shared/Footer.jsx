import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { FaSquareFacebook } from 'react-icons/fa6';


const Footer = () => {
    return (
      <footer className="
      bg-[#244D3F] text-white rounded p-10">
  <div className='space-y-5 text-center '>
    <h2 className='font-bold text-4xl text-white'>KeenKeeper</h2>
     <p className='text-semibold text-xl text-white'>Your personal shelf meaningful connections.Browse, tend, and nurture the relationships that matter most.  </p>
  </div>
  <div>
    <div className=" space-y-4 mt-16">
       <div>
        <p className='text-center'>Social links</p>
       </div>
       {/* icons */}
        <ul >
              <div className="flex justify-center items-center gap-4">
                <div className='rounded-full w-10 h-10 bg-white'>
              
                 <AiFillInstagram className='h-10 w-10 p-3 text-black ' />
               </div>

               <div className='rounded-full w-10 h-10 bg-white '>
            
                <FaSquareFacebook className='h-10 w-10 p-3 text-black ' />
               </div>

                <div className='rounded-full w-10 h-10 bg-white '>
                <BsTwitterX  className='h-10 w-10 p-3 text-black ' />
               </div>
                
              </div>
            </ul>
    </div>
  </div>
   
   <div className='mt-20'>
    
     <div className="divider opacity-100"></div>
  <div className='flex justify-between mt-6'>
    
    
    <div>
        <p className='text-[#FAFAFA] font-normal text-xl'>(©) 2026 Copyright All right reserved</p>
    </div>
    <div className='flex text-[#FAFAFA] font-normal text-xl gap-4'>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
        <p>Cookies</p>
    </div>
  </div>
   </div>

</footer>
    );
};

export default Footer; 