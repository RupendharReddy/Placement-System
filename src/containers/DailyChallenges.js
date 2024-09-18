import React, { useEffect, useState } from 'react'
import "../stylefiles/container styles/DailyChallenges.css"

function DailyChallenges() {
  const [currentDate, setCurrentDate] = useState("");
  const question = "A=10 B=20 C=30 what is A+B+C? lorem ipsum doller sit amet lorem ipsum doller sit amet lorem ipsum doller sit amet lorem ipsum doller sit amet lorem ipsum doller sit amet";
  const [options, setOptions] = useState(["10", "20", "30", "60"]);
  const [answer, setAnswer] = useState(null);
  const [dc,setDc]=useState({
    "Total No.of Challenges" :100,
    "Attempted Challenges":90,
    "Solved Challenges":85,
    "Unsolved Challenges":5,
  })

  const handleOptionChange = (event) => {
    setAnswer(event.target.value);
  };


  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div >
      <div className='date'>
        <p>{currentDate}</p>
      </div>
      <div className='dailychallenge'>
        <div className='dc-info'>
          <h2>Summary</h2>
          <div>
            {Object.entries(dc).map(([keys,values])=>(
              <h3 key={keys}>{keys} <b>{values}</b></h3>
            ))}
          </div>
          
        </div>
        <div className='dc'>
          <p className='question'>{question}</p>
          <form>
            {options.map((option, index) => (
              <label key={index}>
                <input 
                  type="radio" 
                  name="answer" 
                  value={option} 
                  onChange={handleOptionChange} 
                />
                <b>
                  {option}
                </b>
                <br />
              </label>
            ))}
          </form>
          <div className='dc-result'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyChallenges
