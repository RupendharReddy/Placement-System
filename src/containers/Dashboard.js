import React, { useState } from "react";
import "../stylefiles/container styles/Dashboard.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import linkedin from "../images/linkedin.png";
import logo from "../images/logo.png";
import gmail from "../images/gmail.png";
import git from "../images/git.png";
import contact from "../images/contact.png";
import profile from "../images/profile1.jpg";
import wallpaper from "../images/wallpaper.jpg";
import Employee from "../images/Employee.png"
import { useLocation } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

//.............................. Register Chart.js components.........................
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

function Dashboard() {
  const location = useLocation();

  const [info1, setInfo1] = useState({
    name: "Varugu Rupendhar Reddy",
    mail: "rupe@gmail.com",
  });
  
  const [info2, SetInfo2] = useState({
    registerNumber: 1234556789,
    dept: "Computer Science",
    batch: "2021-2025",
    college: "Student Career Engineering College",
  });

// .........................................bar chart configuration.................................

  const barLabels = ['SSC', 'HSC', 'UG-CGPA'];

  const barData = {
    labels: barLabels,
    datasets: [{
      label: 'Points obtained',
      data: [9.5, 8, 9.8],
      backgroundColor: [
        'red',
        'green',
        'blue',
      ],
      borderWidth: 1,
      barThickness: 100,
    }]
  };

  const Options = {
    plugins: {
      legend: {
        display: false 
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false // Hide the y-axis grid lines
        },
        beginAtZero: true
      }
    }
  };

// .......................................line chart configuration.................................

  const lineLabels = ["1st sem", "2nd sem", "3rd sem", "4th sem", "5th sem", "6th sem"];

  const lineData = {
    labels: lineLabels,
    datasets: [{
      label: 'Semester Scores',
      data: [7.34, 7.88, 7.9, 7.61, 8.18, 7.2, 0, 0],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0,
      pointBorderWidth:5
    }]
  };

const jobs={
  Applyed:10,
  Accepted:5,
  Rejected:5,
  Pending:5,
  PlacedAt:1
}

const DailyChallenges={
  Total:150,
  solved:100,
  unsolved:50
}

  return (
    <div className="dashboard">
      <div className="info-div">
        <div
          className="stu-details"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <Avatar className="profileimage" src={<Image src={profile} />} />
        </div>
        <div className="stu-info">
          <div className="info1">
            <h2>
              <b>{info1.name}</b>
            </h2>
            <h3>{info1.mail}</h3>
          </div>
          <div className="info2">
            {Object.entries(info2).map(([key, value]) => (
              <h3 key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: <b>{value}</b>
              </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="chart-div1">
          <h3>Scores of SSC, HSC, CGPA</h3>
          <Bar data={barData} options={Options} />
        </div>
        <div className="chart-div2">
          <h3>Semester-wise Scores</h3>
          <Line data={lineData} options={Options}/>
        </div>
      </div>
      <div className="jobs">
          <h2>Jobs Summary</h2>
        <div className="jobs-info">
        {Object.entries(jobs).map(([key,value])=>(
          <h3>{key.charAt(0).toUpperCase() + key.slice(1)}: <b>{value}</b></h3>
        ))}
        </div>
        <img src={Employee} alt="Employee image" style={{width:"30vb",height:"30vh"}}/>
      </div>
      <div className="dash-footer">
        <div className='company-logo'>
            <img src={logo} alt='logo' style={{ width: '50px', height: '50px', margin: '5px 10px 0px 0px' }} />
            <h2>Social Media Links</h2>
        </div>
        <div className='footer-links'>
            <ul>
              <br />
              <img src={linkedin} alt='linkedin' />
              <a href='https://www.linkedin.com/in/rupendhar-reddy-varugu-390a53263/recent-activity/all/'> Linkedin</a><br />
              <img src={gmail} alt='linkedin' />
              rupe@gmail.com <br />
              <img src={git} alt='linkedin'  />
              <a href='https://github.com/RupendharReddy'> Github</a><br />
              <img src={contact} alt='contact' />
              837XXXX359<br />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
