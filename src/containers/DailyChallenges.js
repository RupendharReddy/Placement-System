import React, { useState } from 'react'
import "../stylefiles/container styles/DailyChallenges.css"

function DailyChallenges() {
  const question = "A=10 B=20 C=30 what is A+B+C?";
  const [options, setOptions] = useState(["10", "20", "30", "60"]);
  const [answer, setAnswer] = useState(null);
  const [dc,setDc]=useState({
    "Total Challenges" :100,
    "Attempted Challenges":0,
    "Solved Challenges":0,
    "Unsolved Challenges":0
  })

  const handleOptionChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className='dailychallenge'>
      <div className='dc-info'>
        <h2>Summary</h2>
        <div>
          {Object.entries(dc).map(([keys,values])=>(
            <h3 key={keys}>{keys}: <b>{values}</b></h3>
          ))}
        </div>
        
      </div>
      <div className='dc'>
        <p>{question}</p>
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
  )
}

export default DailyChallenges
