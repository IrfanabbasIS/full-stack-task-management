
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import 'react-bootstrap';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-fontawesome';
import Signup from './screens/Signup.js';




function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/login' element={<Login/>}/>
            
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;



