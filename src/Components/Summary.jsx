import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from "react-confetti";
import { timeRemaining } from '../utils/constants';

const Summary = () => {
   const navigate = useNavigate();
   const location = useLocation();
  const { correct, timeLeft } = location.state || { correct: 0, timeLeft:0 };
  const handleOnClick = ()=>{
      

    navigate("/body");

  }


  return (
    <div className='bg-zinc-950 w-screen h-screen text-white'>
          <div className='flex justify-center items-center p-4 text-6xl text-bold cursor-pointer text-red-500'>Summary</div>
          {correct>7 && <Confetti/> }

          <div className='flex  items-center justify-center'>
          <div className='pt-[4vw]'>
             
             <div className='h-[17vw] w-[17vw] bg-orange-600 border-2  border-orange-500 rounded-full ml-[4vw] flex flex-col justify-center items-center'>
                   <div className=' text-4xl m-2'> {correct}/10 </div>
                   <div className='text-3xl'> Scored</div>
                  
             </div>
           </div>
           <div className='pt-[4vw]'>
              
             <div className='h-[17vw] w-[17vw] bg-orange-600 border-2  border-orange-500 rounded-full ml-[5vw] flex flex-col justify-center items-center '>
                   <div className=' text-4xl m-4'> {10-correct} </div>
                   <div className='text-3xl'>Wrong Answers </div>
                  
             </div>
           </div>

           <div className='pt-[4vw]'>
             
             <div className='h-[17vw] w-[17vw] bg-orange-600 border-2  border-orange-500 rounded-full ml-[5vw] flex flex-col justify-center items-center'>
                   <div className=' text-4xl m-4'> {Math.floor((timeRemaining-timeLeft)/60)}:{Math.floor((timeRemaining-timeLeft)%60)}s </div>
                   <div className='text-3xl'> Total time taken</div>
                  
             </div>
           </div>

          </div>
        
         


          <div className='flex justify-center items-center mt-[5vw]'>
             <div className=' p-6 w-fit bg-orange-600 h-[3vw]  flex justify-center items-center text-2xl rounded-md cursor-pointer' onClick={handleOnClick}>
             Try Again ! 👍
            </div>
          </div>



          <div>

          </div>

      
    </div>
  )
}

export default Summary
