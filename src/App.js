import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import List from './pages/List';
import Calculadora from './pages/Calculadora';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Quando for só barra é a rota do site. */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/list' element={<List />} />
          <Route path='/calculadora' element={<Calculadora />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
