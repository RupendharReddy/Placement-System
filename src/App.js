import React from 'react'
// import Navlinks from './components/navlinks'
import Wrapper from './components/Wrapper'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Landing from './components/landing';
function App() {
  return (
    <div>
      {/* <Navlinks/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/*" element={<Wrapper/>} />
      </Routes>
        {/* <Wrapper/> */}
      </BrowserRouter>
    </div>
  )
}

export default App