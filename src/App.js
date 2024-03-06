import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Disease, Home, Purpose, Videopage } from './components/pagemange';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/nail-disease" element ={<Home/>} />
          <Route path="/nail-disease/purpose" element ={<Purpose/>} />
          <Route path="/nail-disease/disease" element ={<Disease/>} />
          <Route path="/nail-disease/video" element ={<Videopage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
