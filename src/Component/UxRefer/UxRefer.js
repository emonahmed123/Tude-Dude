import React from 'react'
import {BiChevronRight} from 'react-icons/bi';
import Button from '../Button';
import'./UxRefer.css'
const UxRefer = () => {
  return (
    <div className='max-w-[1240px] mt-9 mx-auto'>
       <h1 className='mx-auto ml-8  md:mx-[127px] text-sm  text-black font-semibold'>UI/UX <BiChevronRight className='inline mr-0' /> Refer & Earn</h1>
   
          
          <div className='w-full mt-20 flex flex-col md:flex-row  mx-auto '>

            <div className='w-[350px] md:w-[486px]  h-[220px] md:h-[188px]  Card  md:mx-[127px] mx-auto '>
            {/* flex justify-between items-center */}
               <div className=' mx-5 mt-5 grid grid-cols-2 md:grid-cols-3'>
                    <div className=' mt-5'>
                    <p className='text-base text-medium text-[#800080]'> Referral Earning</p>
                    <p className='text-3xl mt-2 text-black font-semibold'  >    ₹ 2,500</p>
                    </div>
                    <div className='  mt-5 mx-5 md:mx-0'>
                    <p className='text-base text-medium text-[#800080]'> Referral Earning</p>
                    <p className='text-3xl mt-2 text-black font-semibold'  >7</p>
                    </div>
                    <div className=' mt-5'>
                    <p className='text-base text-medium text-[#800080]'> Referral Earning</p>
                    <p className='text-3xl mt-2 text-black font-semibold' >₹ 500</p>
                    </div>
         
                    <button className='mx-[-10px]   md:ml-[105px]
                      my-10 md:my-6   text-white  Button bg-[#800080]  '>Withdraw Balance</button>
               </div>
              

  
            </div>
 
           <div className='mt-5 md:mt-0  mx-auto'>
               <h1 className='text-[#800080] text-2xl font-semibold' >Your Referral Code </h1>
 
                <div className=' w-[350px] md:w-[358px] h-[60px] New mt-2' >
                     <h1 className='text-center  Edit  pt-3   ' >EDCH54</h1>
                </div>
           </div>

          </div>
    
   
   
   
   
    </div>
  )
}

export default UxRefer
