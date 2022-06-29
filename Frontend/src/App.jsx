import './style/App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/About' element={ <About />} />
        <Route path='/Docs' element={ <Documentation />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
