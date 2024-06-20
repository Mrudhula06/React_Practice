
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import{Route, Routes} from 'react-router-dom'
import About from './About';
function App() {
  return (
   <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
