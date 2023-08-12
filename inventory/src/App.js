
import { Route, Router, Routes } from 'react-router';
import './App.css';
import Dashboard from './pages/Dashboard';
import Departments from './pages/Departments';
import Products from './pages/Products';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div>
        <Navbar/>
    
  
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='department' element={<Departments/>} />
          <Route path='products' element={<Products/>} />
        </Routes>
        </div>
      
    
  );
}

export default App;
