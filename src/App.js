import React from 'react'
import Navlinks from './components/navlinks'
import Wrapper from './components/Wrapper'
import "./stylefiles/Home.css";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <Navlinks/> */}
      <BrowserRouter>
        <Wrapper/>
      </BrowserRouter>
    </div>
  )
}

export default App