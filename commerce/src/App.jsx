import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {AuthProvider} from '../AuthContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { Toast } from 'bootstrap';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import AuthForm from './Pages/AuthForm';



library.add(fab,fas,far)


function App() {


  return (
    <>

      
    <AuthProvider>


      <Router>
      <Aside />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/authForm' element={<AuthForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route />
      <Route />

      </Routes>
      </Router>

      <ToastContainer />

    </AuthProvider>
     
    </>
  )
}

export default App
