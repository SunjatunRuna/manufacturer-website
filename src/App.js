import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Purchase from './Pages/Purchase/Purchase';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Login from './Pages/SocialLogin.js/Login';
import Signup from './Pages/SocialLogin.js/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyOrder from './Pages/Dashboard/MyOrder';
import Review from './Pages/Dashboard/Review';
import Error from './Pages/Error/Error';
import Profile from './Pages/Dashboard/Profile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<MyPortfolio />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
