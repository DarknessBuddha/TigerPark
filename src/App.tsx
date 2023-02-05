import './App.css'
import Home from "./pages/Home";
import Parking from "./pages/Parking";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";


function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />}/>
                <Route path='/parking' element={<Parking />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
