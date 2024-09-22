import React, { useEffect, useState } from 'react';
import "../stylefiles/container styles/DailyChallenges.css";
import { color } from 'chart.js/helpers';
import { Button } from 'antd';

function DailyChallenges() {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState("");
  const question = "A=10 B=20 C=30 what is A+B+C?";
  const [options, setOptions] = useState(["10", "20", "30", "60"]);
  const [answer, setAnswer] = useState("60");
  const [selectedOption, setSelectedOption] = useState(null); // To track the selected option
  const [result, setResult] = useState(null); // To store the result of the answer check
  const [dc, setDc] = useState({
    "Total No.of Challenges":100,
    "Attempted Challenges": 90,
    "Solved Challenges": 85,
    "Unsolved Challenges": 5,
  });
  const [content,setContent] = useState(true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Check if the selected answer is correct
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
    if (selectedOption === null) {
      alert("Please select an option");
    }
    else{
      setContent(false);
      if (selectedOption === answer) {
        setResult("Correct!");
        setDc({ ...dc, "Solved Challenges": dc["Solved Challenges"] + 1 });
      } else {
        setResult("Incorrect Answer");
        setDc({...dc, "Unsolved Challenges": dc["Unsolved Challenges"] + 1});
        // document.getElementsByClassName(".dc-result").setClassName("dc-result-wrong");
        document.querySelector(".dc-result").style.color = "red";
      }
      setDc({...dc, "Attempted Challenges": dc["Attempted Challenges"] + 1});
    }
  };

  useEffect(() => {
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className='dc-content'>
      <div className='date'>
        <p>{currentDate}</p>
      </div>
      <div className='dailychallenge'>
        <div className='dc-info'>
          <h2>Summary</h2>
          <div>
            {Object.entries(dc).map(([key, value]) => (
              <h3 key={key}>{key}: <b>{value}</b></h3>
            ))}
          </div>
        </div>
        <div className='dc'>
          {content ? (
            <>
              <p className='question'>{question}</p>
              <form>
                {options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                    />
                    <b>{option}</b>
                    <br />
                  </label>
                ))}
                <Button type="primary" onClick={handleSubmit} id='submit'>Submit</Button>
              </form>
            </>
          ) : (
            null
          )}
          <div className='dc-result'>
            {result && <p>{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyChallenges;
