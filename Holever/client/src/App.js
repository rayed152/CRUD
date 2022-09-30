import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Stats from './Stats';
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/homes">Click Me</Link>
      </nav> */}
      {/* <h1><a href="/homes">Click Me</a></h1> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/stat" element={<Stats/>} />     
        </Routes>
      </Router> 
    </div>

  );
}

export default App;
