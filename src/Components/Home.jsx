import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
   const  handleOnClick = ()=>{
     
    navigate("/body")
   };

  return (
<div className="bg-gradient-to-b from-zinc-900 to-violet-900 flex justify-center  flex-col items-center h-screen">
  <h1 className="text-white text-8xl font-bold font-['Neue_Montreal'] m-3">Welcome to the Brain Battle!</h1>
    <div className="text-white p-3   border-4 border-violet-700 rounded-md  text-3xl font-bold cursor-pointer font-['Neue_Montreal']"
        onClick={handleOnClick}
    
    
    >Start Quiz</div>
</div>

  )
}

export default Home;
