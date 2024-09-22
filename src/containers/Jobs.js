import React, { useState } from 'react';
import "../stylefiles/container styles/Jobs.css";
import cardicon from "../images/card-icon.png";
import microsoft from "../images/microsoft.png";
import tata from "../images/tata.png";
import { Card, Flex, Button, Select,Modal } from 'antd';

const { Option } = Select;

function Jobs() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All"); // Filter state
  const [studentinfo, setStudentInfo] = useState({
    dept: "Computer Science",
    ssc: 7.0,
    hsc: 7.0,
    cgpa: 7.0,
  });

  const [jobs, setJobs] = useState([
    {
      image: microsoft,
      company: "Microsoft",
      title: "Software Developer",
      package: "10 LPA",
      location: "Pan India",
      type: "Full-time",
      dept: "Computer Science",
      eligiblity: {
        ssc: 7.0,
        hsc: 7.0,
        cgpa: 7.0,
      },
      lastdate: "01/10/2024",
      applied: false, // New property to track application status
    },
    {
      image: "",
      company: "KMC",
      title: "Software Developer",
      package: "10 LPA",
      location: "Pan India",
      type: "Full-time",
      dept: "Computer Science",
      eligiblity: {
        ssc: 7.0,
        hsc: 7.0,
        cgpa: 7.0,
      },
      lastdate: "01/10/2024",
      applied: false, // New property
    },
    {
      image: tata,
      company: "TCS",
      title: "Software Developer",
      location: "Pan India",
      type: "Full-time",
      dept: "Computer Science",
      eligiblity: {
        ssc: 7.0,
        hsc: 9.0,
        cgpa: 7.0,
      },
      lastdate: "01/10/2024",
      applied: false, // New property
    },
    {
      image: tata,
      company: "TCS",
      title: "Software Developer",
      location: "Pan India",
      type: "Full-time",
      dept: "Computer Science",
      eligiblity: {
        ssc: 7.0,
        hsc: 9.0,
        cgpa: 7.0,
      },
      lastdate: "01/10/2024",
      applied: false, // New property
    },
    {
      image: tata,
      company: "TCS",
      title: "Software Developer",
      location: "Pan India",
      type: "Full-time",
      dept: "Computer Science",
      eligiblity: {
        ssc: 7.0,
        hsc: 9.0,
        cgpa: 7.0,
      },
      lastdate: "01/10/2024",
      applied: false, // New property
    },
    {
      image: tata,
      company: "TCS",
      title: "Software Developer",
      location: "Pan India",
      type: "Full-time",
      dept: "Computer Science",
      eligiblity: {
        ssc: 7.0,
        hsc: 9.0,
        cgpa: 7.0,
      },
      lastdate: "01/10/2024",
      applied: false, // New property
    },
  ]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  // Handle the filter change
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // Handle job application
  const handleApply = (index) => {
    Modal.confirm({
      title: 'Confirm Application',
      content: 'The details in your profile will be shared with the company, including your Resume. If the details are up to date, click on ok to apply.',
      onOk() {
        const updatedJobs = [...jobs];
        updatedJobs[index].applied = true; // Set applied to true when the Apply button is clicked
        setJobs(updatedJobs);
      },
      onCancel() {
        // Do nothing on cancel
      },
    });
  };
  

  // Filter jobs based on selected filter
  const filteredJobs = jobs.filter((job) => {
    const isEligible = studentinfo.dept === job.dept &&
      studentinfo.ssc >= job.eligiblity.ssc &&
      studentinfo.hsc >= job.eligiblity.hsc &&
      studentinfo.cgpa >= job.eligiblity.cgpa;

    if (filter === "Eligible") {
      return isEligible;
    } else if (filter === "Not Eligible") {
      return !isEligible;
    }
    return true; // "All jobs" will return all jobs
  });

  return (
    <div id='jobs-content'>
      {/* <h1>List of Jobs</h1> */}

      {/* Dropdown for selecting filter */}
      <Select value={filter} onChange={handleFilterChange} style={{ width: 200, marginBottom: '20px' }}>
        <Option value="All">All Jobs</Option>
        <Option value="Eligible">Eligible Jobs</Option>
        <Option value="Not Eligible">Not Eligible Jobs</Option>
      </Select>

      <div id='jobs-container'>
        {
          filteredJobs.map((job, index) => {
            const isEligible = studentinfo.dept === job.dept &&
              studentinfo.ssc >= job.eligiblity.ssc &&
              studentinfo.hsc >= job.eligiblity.hsc &&
              studentinfo.cgpa >= job.eligiblity.cgpa;

            return (
              <div className="job-card" key={index}> {/* Added class here */}
                <Card loading={loading} style={{ minWidth: 300 }}>
                  <Card.Meta
                    avatar={<img src={job.image || cardicon} alt="icon" id='card-icon' />}
                    title={job.company}
                    description={
                      <>
                        <p><b>Title : </b>{job.title}</p>
                        <p><b>Location : </b>{job.location}</p>
                        <p><b>Type : </b>{job.type}</p>
                        <p><b>Department : </b>{job.dept}</p>
                        <p>
                          <b>Eligibility : </b>
                          {`SSC: ${job.eligiblity.ssc}, HSC: ${job.eligiblity.hsc}, CGPA: ${job.eligiblity.cgpa}`}
                        </p>
                        <p><b>Last Date : </b>{job.lastdate}</p>
                      </>
                    }
                  />
                  <div id='apply-btn'>
                    {isEligible ? (
                      job.applied ? (
                        <Button type="primary" disabled style={{ color: 'green' }}>Applied</Button>
                      ) : (
                        <Button type="primary" onClick={() => handleApply(index)}>Apply</Button>
                      )
                    ) : (
                      <Button type="primary" disabled style={{ color: 'red' }}>Not Eligible</Button>
                    )}
                  </div>
                </Card>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Jobs;
