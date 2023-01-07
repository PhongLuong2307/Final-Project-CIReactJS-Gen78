import '../../components/App/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Navigation from '../../layout/Navigation';
import Footer from '../../layout/Footer';
import Admin from '../../pages/Admin';
import Login from '../../pages/Login';

function App() {

  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
