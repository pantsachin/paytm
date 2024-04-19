import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BottomWarning } from './components/BottomWarning';
import { Signup } from "./pages/Signup"
import { Signin } from './pages/Signin';
import { AppBar } from './components/Appbar';
import { Balance } from './components/Balance';


function App() {

  return (
    <div>
        {/* <BrowserRouter>

        <Routes>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>}  />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/send" element={<SendMoney/>} />
        
        </Routes>

        </BrowserRouter> */}

        <Balance/>


    </div>
  )
}

export default App
