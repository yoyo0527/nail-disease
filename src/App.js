import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Disease, Home, Purpose, Videopage } from './components/pagemange';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/nailbook" element ={<Home/>} />
          <Route path="/nailbook/purpose" element ={<Purpose/>} />
          <Route path="/nailbook/disease" element ={<Disease/>} />
          <Route path="/nailbook/video" element ={<Videopage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
