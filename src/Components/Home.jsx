import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
   const  handleOnClick = ()=>{
     
    navigate("/body")
   };

  return (
<div className="bg-gradient-to-b from-zinc-900 to-violet-900 flex justify-center  flex-col items-center h-screen">
  <h1 className="text-orange-600 text-8xl font-bold font-['Neue_Montreal'] m-[4vw]">Welcome to the Brain Battle!</h1>
    <div className="text-violet-700 p-3   bg-orange-600 border-2 border-violet-700 rounded-md  text-3xl font-bold cursor-pointer font-['Neue_Montreal']"
        onClick={handleOnClick}
    
    
    >Start Quiz</div>
</div>

  )
}

export default Home;
