import Loginpage from '../src/Loginpage'
import Homepage from '../src/Homepage'
import {  Routes, Route } from 'react-router-dom'     
function App() {
  return( 
  <>
    
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
  </>
 
)}

export default App