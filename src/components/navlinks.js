import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Registration from './Registration'
import StudentLogin from './studentlogin'
import Dashboard from './dashboard'
import Landing from './landing'
function Navlinks() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>} />
                {/* <Route path='/studentlogin' element={<StudentLogin/>} />
                <Route path='/registration' element={<Registration/>} /> */}
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navlinks