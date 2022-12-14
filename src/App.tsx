import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/items/:id" element= {<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
