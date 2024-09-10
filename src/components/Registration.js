import React, { useState } from "react";
import "../stylefiles/Registration.css";
import { Steps,Button } from 'antd';
import { useNavigate } from "react-router-dom";


function Registration() {
  const [current, setCurrent] = useState(0);
  const [student, setStudent] = useState({
    Name: "",
    DOB: "",
    Gender: "",
    Mail: "",
    Password: "",
    CPassword: "",
    Phone: "",
    Address: "",
    CollegeName: "",
    Branch: "",
    Year: "",
    YearOfPassing: "",
    Rollno: "",
    Cgpa: "",
    Aadhar:"",
    SSC_url: "",
    HSC_url: "",
    Deploma_url: "",
    Semester_Urls: "",
    Internship: "",
    ResumeLink: "",
    proofLink: "",
  });

  const navigate = useNavigate();
  const onchange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);
    
  }

  const onSelectChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  const onSubmit=(e)=>{
    // e.preventDefault();
    setCurrent(3);
    setTimeout(() => {
      navigate("/Home");
    },2000);
    console.log("Home");
    
  }

  return (
    <div className="regdiv">
      <div>
        <form >
          {current === 0 && (
            <div className="regform">
              <label>Full Name : </label>
              <input type="text" required={true} name="Name" placeholder="Your full name" onChange={onchange} />
              <label>Date of birth : </label>
              <input type="date" required={true} name="DOB" placeholder="Date of Birth" onChange={onchange} />
              <label>Gender : </label>
              <select name="Gender" onChange={onSelectChange}>
                <option value="None">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select><br />
              <label>Mail : </label>
              <input type="email" required={true} name="Mail" placeholder="Your mail-id" onChange={onchange} />
              <label>Password : </label>
              <input type="password" required={true} name="Password" placeholder="Enter Password" onChange={onchange} />
              <label>Confirm Password : </label>
              <input type="password" required={true} name="CPassword" placeholder="Re-Enter Password to conform" onChange={onchange} />
              <label>Mobile Number : </label>
              <input type="tel" required={true} name="Phone" placeholder="Enter Mobile Number" onChange={onchange} />
              <label>Address : </label>
              <input type="text" required={true} name="Address" placeholder="Enter Permanent address" onChange={onchange} /><br />
              <Button type="primary" onClick={(e) =>{e.preventDefault(); setCurrent(1);}}>Next</Button>
            </div>
          )}
          {current === 1 && (
            <div className="regform">
              <label>College Name : </label>
              <input type="text" required={true} name="CollegeName" placeholder="College Name" onChange={onchange} />
              <label>Roll Number : </label>
              <input className="number" type="number" required={true} name="Rollno" placeholder="Roll Number" onChange={onchange} />
              <label>Branch : </label>
              <select name="Branch" onChange={onSelectChange}>
                <option value="None">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="CSBS">CSBS</option>
                <option value="CIVIL">CIVIL</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="EIE">EIE</option>
                <option value="IT">IT</option>
                <option value="MECH">MECH</option>
              </select>
              <label>Year : </label>
              <select name="Year" onChange={onSelectChange}>
                <option value="None">Select Year</option>
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
              </select>
              <label>Year of Passing : </label>
              <input className="number" type="number" required={true} name="YearOfPassing" placeholder="Year of Passing" min={2025} max={2028} onChange={onchange} />
              <label>Cgpa : </label>
              <input className="number" type="number" required={true} name="Cgpa" placeholder="Cgpa" min={0} max={10} step={0.01} onChange={onchange} />
              <label>SSC</label>
              <input className="number" type="number" required={true} name="SSC" placeholder="SSC" onChange={onchange}/>
              <div>
                <Button type="primary" onClick={() => setCurrent(0)}>Previous</Button>
                <Button type="primary" onClick={() => setCurrent(2)}>Next</Button>
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="regform">
              <label>Aadhar</label>
              <input type="file" required={true} name="Aadhar" placeholder="Aadhar Drive link" onChange={onchange}/>
              <label>Photo</label>
              <input type="file" required={true} name="Photo" placeholder="Upload Your Photo" onChange={onchange}/>
              <label>Resume</label>
              <input type="file" required={true} name="Resume" placeholder="Upload Your Resume" onChange={onchange}/>
              <label>Marksheets</label>
              <input type="url" required={true} name="Marksheets" placeholder="Drive link of marksheets folder up to previous sem" onChange={onchange}/>
              <div>
                <Button type="primary" onClick={() => setCurrent(1)}>Previous</Button>
                <Button type="primary" onClick={onSubmit} >Register</Button>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="steps">
        <Steps
          direction="vertical"
          current={current}
          items={[
            { title: 'Personal Details' },
            { title: 'Academic Details' },
            { title: 'Documents' },
          ]}
        />
      </div>
    </div>
  );
}

export default Registration;
