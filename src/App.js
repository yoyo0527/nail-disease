import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, Purpose } from './components/pagemange';
import { Videopage } from './Videopage';
import { Disease } from './Diseasepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/naildisease" element ={<Home/>} />
          <Route path="/naildisease/purpose" element ={<Purpose/>} />
          <Route path="/naildisease/disease" element ={<Disease/>} />
          <Route path="/naildisease/video" element ={<Videopage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
