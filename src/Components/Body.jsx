import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { timeRemaining } from "../utils/constants";

const Body = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [questionsIndex, setQuestionIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const[timeLeft,setTimeLeft]= useState(timeRemaining);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  },[setTimeLeft])


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=" +
          encodeURIComponent("https://api.jsonserve.com/Uw5CrX")
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const json = await response.json();
      setQuestions(json?.questions);
    } catch (e) {
      console.log("Error: " + e.message);
    }
  };
  const navigate = useNavigate();
  const handleOnClickNaviagte = () => {
    if (questionsIndex === questions.length - 1) {
      navigate("/summary",{state:{correct,wrong,timeLeft}});
    }
  };

  const handleOnClick = (option, index) => {


    setCurrentIndex(index);
    

    if (option?.is_correct === true) {
      setCorrect((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }
    setTimeout(() => {
      if (questionsIndex !== questions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
        setCurrentIndex(-1);
      }
    }, 300);
  };

  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col   ">
      <div className=" bg-white w-[1400px] h-[600px]  rounded-md border-2 border-white my-8 mx-10  p-4">
        <div className="bg-blue-400 p-4 text-3xl rounded-md cursor-pointer">
          <span className="m-2">{questionsIndex + 1}.</span>
          {  questions && questions[questionsIndex]?.description}
        </div>
        <div className=" flex justify-end m-2 p-2">
          {questions[questionsIndex]?.topic &&
            `(${questions[questionsIndex].topic})`}
        </div>

        <div className="flex flex-col p-3 mt-[0.7vw] rounded-lg">
          {questions[questionsIndex]?.options?.map((option, index) => (
            <div
              key={index}
              className={`m-2 p-3 bg-slate-100 cursor-pointer text-2xl   ${
                index === currentIndex ? "bg-orange-300" : ""
              }`}
              onClick={() => handleOnClick(option, index)}
            >
              {" "}
              <span className="m-2">{`${index + 1})`}</span> {option?.description} 
             

            </div>
          ))}
        </div>


        <div className="flex justify-end">
            
            <div className="p-4 m-2 rounded-md h-[3vw] w-fit bg-orange-500 text-white">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}s ⏳</div>

        </div>





      </div>
      <div className="flex justify-center ">
        <div
          className=" h-[3.5vw] w-[10vw]   p-2 m-2 rounded-md border-2 border-violet-800 bg-violet-900 text-white flex justify-center items-center  text-2xl cursor-pointer"
          onClick={handleOnClickNaviagte}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Body;
