import { useState } from 'react'

import './App.css'
import Login from './pages/login/Login'
import {Route, Routes, Navigate} from 'react-router-dom';

import { useAuthContext } from './context/AuthContext';

import Page1 from './pages/page1/Page1';
import Page2 from './pages/page1/Page2';

function App() {
  const {authUser} = useAuthContext();

  return (
    <>
<div>
      <Routes>
      <Route path='/' element={authUser ? <Page1 /> : <Navigate to={"/login"} />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/secondpage' element={authUser ? <Page2 /> : <Navigate to={"/login"} />} />

      </Routes>
        </div>
    </>
  )
}

export default App
