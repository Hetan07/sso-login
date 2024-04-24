import { useState } from 'react'

import './pages/page1/App.css'
import Login from './pages/login/Login'
import {Route, Routes, Navigate} from 'react-router-dom';

import { useAuthContext } from './context/AuthContext';

import Page1 from './pages/page1/Page1';
import Page2 from './pages/page1/Page2';
import Tictac from "./pages/page1/Tictac.jsx";
import Snakes from "./pages/page1/Snakes.jsx";
function App() {
  const {authUser} = useAuthContext();

  return (
    <>
<div>
      <Routes>
      <Route path='/' element={authUser ? <Snakes /> : <Navigate to={"/login"} />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/secondpage' element={authUser ? <Tictac /> : <Navigate to={"/login"} />} />

      </Routes>
        </div>
    </>
  )
}

export default App
