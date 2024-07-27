import React, { useState } from 'react'
import '../stylefiles/StudentRegistration.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import registration from '../images/registration.png';
function StudentRegistration() {
    const [login,setLogin] = useState(true);
    const [student, setStudent] = useState({
        Name: "",
        Age: "",
        Gender: "",
        Mail: "",
        Password: "",
        CPassword: "",
        Phone: "",
        Address: "",
        CollegeName: "",
        Branch: "",
        Year: "",
        Rollno: "",
        Cgpa: "",
        Experience: "",
        ResumeLink: "",
        Experience: "",
        proofLink: ""
    })
    const onChange=(e)=>{
        setStudent({...student, [e.target.name]: e.target.value})
        console.log(student);
    }
    return (
        <div className='reg-log'>
            <div className='reg-img'>
                <img src={registration} alt="registration"/>
                <h2>On registring, you can</h2>
                <div>
                    <p>✅Build your profile</p>
                    <p>✅Get your dream job</p>
                    <p>✅Get placed</p>
                </div>
            </div>
            <div className='form'>
            <div className='formbtn'>
                <Button variant="primary" onClick={() => setLogin(true)} className='loginbtn'>Login</Button>
                <Button variant="primary" onClick={() => setLogin(false)} className='regbtn'>Register</Button>
            </div>
                { login ?
                <div >
                    <form className='loginform'>
                        <label>
                            <h3>Email Id</h3>
                            <input type="email" placeholder='Enter Email' name="Mail" onChange={onChange}/> <br/> 
                            <h3>Password</h3>
                            <input type="password" placeholder='Enter Password' name="Password" onChange={onChange}/> <br/> 
                        </label> 
                        <Button variant="primary">Login</Button>
                    </form>
                    </div>
                    :<div className='regform' >
                        <form className='studentRegForm'>
                            <label>
                                <div>
                                    <h3>Name<b>*</b></h3>
                                    <input type="text"  name="Name" onChange={onChange}/> <br/> 
                                    <h3>Email Id</h3>
                                    <input type="email"  name="Name" onChange={onChange}/> <br/> 
                                </div>
                                <h3>Gender</h3>
                                <input type="radio"  name="Name" onChange={onChange}/>Male 
                                <input type="radio"  name="Name" onChange={onChange}/>Female <br/>      
                            </label> 
                            {/* <Button variant="primary">Register</Button> */}

                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default StudentRegistration