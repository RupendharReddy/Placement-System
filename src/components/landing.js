import React, { useState, useRef, useEffect } from 'react';
import '../stylefiles/landing.css';
import hiring from '../gifs/hiring.gif';
import tata from '../images/tata.png';
import zoho from '../images/zoho.png';
import flipkart from '../images/flipkart.png';
import facebook from '../images/facebook.png';
import microsoft from '../images/microsoft.png';
import apple from '../images/apple.png';
import airbnb from '../images/airbnb.png';
import exam from '../images/exam.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import git from '../images/git.png';
import contact from '../images/contact.png';
import StudentRegistration from './StudentRegistration';


function Landing() {
  const [register,setRegister] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const companiesRef = useRef(null);
  const companies = [
    { src : "https://www.tcs.com/careers/india/tcs-fresher-hiring-nqt-2024" , name: 'TCS', role: 'Software Developer', rating: '⭐ 5.0', img: tata },
    { src : "https://www.zoho.com/careers/#jobs" , name: 'Zoho', role: 'Product Manager', rating: '⭐4.5', img:zoho },
    { src : "https://www.flipkartcareers.com/#!/joblist" , name: 'Flipkart', role: 'System Engineer', rating: '⭐4.5', img:flipkart },
    { src : "https://www.metacareers.com/areas-of-work/Facebook%20App/?p[divisions][0]=Facebook&divisions[0]=Facebook" , name: 'Facebook', role: 'Data Analyst', rating: '⭐4.0', img: facebook },
    { src : "https://careers.microsoft.com/v2/global/en/home.html" , name: 'Microsoft', role: 'Software Engineer', rating: '⭐4.8', img: microsoft },
    { src : "https://www.apple.com/careers/in/" , name: 'Apple', role: 'Designer', rating: '⭐4.2', img: apple },
    { src : "https://careers.airbnb.com/" , name: 'Airbnb', role: 'UI/UX Designer', rating: '⭐4.6', img: airbnb }
    // Add more companies as needed
  ];

  const scrollToIndex = (index) => {
    if (companiesRef.current) {
      const companiesContainer = companiesRef.current;
      const companyWidth = companiesContainer.scrollWidth / companies.length;
      companiesContainer.scrollTo({
        left: index * companyWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % companies.length;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [companies.length]);

  return (
    <div>
      <div className='topbar'>
        <h1 className='logo'>naukri</h1>
        {/* <a href="#about"><h2>About Us</h2></a> */}
        <div className='btns'>
          {/* <button className='login-btn'>Login</button> */}
        {
          register?<button className='registration-btn' onClick={() => setRegister(!register)}>Back</button>
          :<button className='registration-btn' onClick={() => setRegister(!register)}>login/signin</button>
        }
        </div>
      </div>
      {
        register?<StudentRegistration/>:
        // <div>
        <div className='content'>
          <div className='heading'>
            <div className='heading-text'>
              <h1>Find your dream job now</h1>
              <h2>Explore top companies</h2>
            </div>
            <img src={hiring} alt='hiring'/>
          </div>
          <div className='companies'>
            <h1>Top companies hiring now<b>.</b></h1>
            <div className='companies-list' ref={companiesRef}>
              {companies.map((company, index) => (
                <a href={company.src} target="_blank">
                  <div className='company' id='card' key={index}>
                    <img src={company.img} alt={company.name} />
                    <h3>{company.name}</h3>
                    <h4>{company.role}</h4>
                    <h5>{company.rating}</h5>
                  </div>
                </a>
              ))}
            </div>
            <div className='dots-container'>
              {companies.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className='interview'>
            <h2>Popular software technologies</h2>
            <div className='technologies'>
              <button>Artifical Intelligence</button>
              <button>Machine Learning</button>
              <button>Data Science</button>
              <button>Big Data</button>
              <button>Cloud Computing</button>
              <button>Blockchain</button>
            </div>
            <div className='technologies'>
              <button>IoT</button>
              <button>Data Structure</button>
              <button>oops</button>
              <button>Automation</button>
              <button>Cyber Security</button>

            </div>
            <div className='exam'>
              <div className='exam-block'>
                <img src={exam} alt='exam'/>
                <div className='interview-questions'>
                  <h2>Aptitude for interviews</h2>
                  <div className='site'>
                    <a href='https://www.javatpoint.com/aptitude/quantitative' target='_blank'><button>javatpoint</button></a>
                    <a href='https://www.geeksforgeeks.org/aptitude-questions-and-answers/' target='_blank'><button>geeksforgeeks</button></a>
                    <a href='https://www.indiabix.com/aptitude/questions-and-answers/' target='_blank'><button>Indiabix</button></a>
                    <a href='https://www.ambitionbox.com/topics/aptitude/questions-and-answers' target='_blank'><button>Ambitionbox</button></a>
                    <a href='https://prepinsta.com/learn-aptitude/' target='_blank'><button>prepinsta</button></a>
                    <a href='https://timespro.com/blog/common-aptitude-interview-questions-and-answers-you-should-know' target='_blank'><button>Timespro</button></a>
                  </div>
                    <br/>
                    <b>click above buttons to know open the site ☝️</b>
                </div>
              </div>
            </div>

          </div>
        </div>
      }
        <div className='footer'>
          <div className='company-logo'>
            <h2>naukri</h2>
          </div>
          <div className='footer-links'>
            <ul>
              <br/>
              <img src={linkedin} alt='linkedin' style={{ width: '30px', height: '30px',margin:'5px 10px 0px 0px' }} />
              <a href='https://www.linkedin.com/in/rupendhar-reddy-varugu-390a53263/recent-activity/all/'> Linkedin</a><br/>
              <img src={gmail} alt='linkedin'style={{ width: '30px', height: '30px',margin:'5px 10px 0px 0px' }}/>
              varugurupendharreddy@gmail.com <br/>
              <img src={git} alt='linkedin'style={{ width: '30px', height: '30px' ,margin:'5px 10px 0px 0px'}}/>
              <a href='https://github.com/RupendharReddy'> Github</a><br/>
              <img src={contact} alt='linkedin'style={{ width: '30px', height: '30px' ,margin:'5px 10px 0px 0px'}}/>
              837XXXX359<br/>
            </ul>
          </div>
        </div>
      {/* </div> */}

    </div>
  );
}

export default Landing;
