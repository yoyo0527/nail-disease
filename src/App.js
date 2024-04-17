import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Aftertest, Beforetest, Disease, Home, Purpose, Skill, Videopage } from './components/pagemange';
import './design.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/naildisease" element ={<Home/>} />
          <Route path="/naildisease/purpose" element ={<Purpose/>} />
          <Route path="/naildisease/disease" element ={<Disease/>} />
          <Route path="/naildisease/skill" element ={<Skill/>} />
          <Route path="/naildisease/video" element ={<Videopage/>} />
          <Route path="/naildisease/beforetest" element ={<Beforetest/>} />
          <Route path="/naildisease/aftertest" element ={<Aftertest/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
