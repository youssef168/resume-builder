import './App.css';
import Home from './Pages/Home';
import Builder from './Pages/Builder';
import './Sass/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/builder' element={<Builder />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
