import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/aboutMe' element={<AboutMe/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
