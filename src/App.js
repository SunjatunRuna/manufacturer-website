import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Purchase from './Pages/Purchase/Purchase';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<MyPortfolio />}></Route>
        <Route path='/purchase/:id' element={<Purchase />}></Route>
      </Routes>
    </div>
  );
}

export default App;
