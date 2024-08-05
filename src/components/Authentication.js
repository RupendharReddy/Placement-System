import React, { useState } from 'react'
import '../stylefiles/Authentication.css';
import registration from '../images/registration.png';
import { Button } from 'antd';
import Studentlogin from './studentlogin';
import Registration from './Registration';

function Authentication() {
    const [login,setLogin] = useState(true);
    
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
                <Button type={login ? "primary" : "secondary"} onClick={() => setLogin(true)} className='loginbtn'>Login</Button>
                <Button type={login ? "secondary" : "primary"} onClick={() => setLogin(false)} className='regbtn'>Register</Button>
            </div>
                { login ?
                    <Studentlogin/>
                    :<div className='regform' >
                        <Registration/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Authentication