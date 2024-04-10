import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BottomWarning } from './components/BottomWarning';
import {Signup} from "./pages/Signup"
import { Heading } from './components/Heading';

function App() {

  return (
    <div>
        {/* <BrowserRouter>

        <Routes>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>}  />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/send" element={<SendMoney/>} />
        <Route/>

        </Routes>

        </BrowserRouter> */}
  
  
 {/* <Signup/> */}

 
 <BottomWarning
        label="This is a warning message."
        buttonText="Go to Dashboard"
        to="/dashboard"
      />
  
  

  
    </div>
  )
}

export default App
