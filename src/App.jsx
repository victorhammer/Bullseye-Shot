import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/Jugar';
import Contact from './components/pages/Contact';
import Tournaments from './components/pages/Tournaments';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { auth } from './config/firebase';
import { signOut } from "firebase/auth";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function App() {

  //const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  return (
    <Router>
      <AuthProvider>
        <Header  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth  />} />
          <Route path='/tournaments' element={<Tournaments />} />
          <Route path='/jugar' element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  )
}

export default App
