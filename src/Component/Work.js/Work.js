import React from 'react'
import Vectorone from '../../assests/workpng/Vector (2).png'
import Vectorone2 from '../../assests/workpng/Vector (3).png'
import Vectorone3 from '../../assests/workpng/Vector (4).png'
import Vectorone4 from '../../assests/workpng/Vector (6).png'
import Vectorone5 from '../../assests/workpng/Vector (5).png'

const Work = () => {
  return (
    <div className='max-w-[1240px] ' >
      
      <h1 className='text  text-[#800080] ml-10 md:ml-[170px] mt-10 text-2xl font-semibold' > How does it work ?</h1>
    
       <div className=' grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-[-129px] ml-8   mt-5 md:mx-44'>
       
        <div className='md:w-[359px]  h-[72px] flex'>
           <div className='work rounded-full py-2 px-2 w-16 h-16 ' >
             <img className='my-4 w-8 mx-2' src={Vectorone}/>
           </div>
            <div className='w-[200px] ml-5'>
                <h1 className='text-sm font-semibold'>Invite your Friends</h1>
                <p className='text-sm' >Share the link tutedude.com with
                   your friends</p>
            </div>
        </div> 
        
      <div className='md:w-[360px]  h-[82px] flex '  >
           <div className='mb-11 mx-0 work rounded-full  w-16 h-16' >
             <img className='pt-[22px]  pl-[20px] ' src={Vectorone3}/>
           </div>
           <div className='w-[200px] ml-5'>
                <h1 className='text-sm font-semibold'>Friend purchases any course</h1>
                <p className='text-sm '>Using your REFERRAL CODE in the payments page </p>
            </div>
        </div>  

         <div className='md:w-[340px]  h-[72px] flex  '  >
           <div className='work rounded-full py-2 px-2 w-16 h-16 ' >
             <img className='my-4  ml-4 w-4 h-6' src={Vectorone4}/>
           </div>
            <div className='ml-5 w-[260px] '>
                <h1 className='text-sm font-semibold w-full'>You get ₹ 200 as referral money </h1>
                <p className='text-sm' >On total purchase the friend makes, into your wallet 
                 </p>
            </div>
        </div> 

 
         <div className='md:w-[360px]  h-[72px] flex '  >
           <div className='work rounded-full py-2 px-2 w-16 h-16 ' >
             
             <img className='my-3 ml-2' src={Vectorone5}/>

             </div>
            <div className=' w-[250px] ml-5'>
                <h1 className='text-sm font-semibold'>Your Friend gets ₹ 200 Off </h1>
                <p className='text-sm' >On his overall fee on successful purchase using your referral code 
                 </p>
            </div>
        </div> 
      
         <div className=' md:w-[360px]  h-[72px] flex '  >
           <div className='work rounded-full py-2 px-2 w-16 h-16 ' >
             <img className='my-3 ml-2' src={Vectorone2}/>
           </div>
            <div className='w-[250px] ml-5'>
                <h1 className='text-sm font-semibold'>Transfer money from wallet</h1>
                <p className='text-sm' >When the wallet balance reaches
                ₹200 or more, you can withdraw it</p>
            </div>
        </div> 
       
       
      
    
      </div>
         
     <div className=' ml-12 md:ml-[162px] mt-12 mb-16'>
        <h1 className='text-sm mb-5 text-[#800080]'>Friends Who Enrolled</h1>
        <h1 className='text-sm text-[#800080]'>Terms & Conditions</h1>
     </div> 

    </div>
  )
}

export default Work
