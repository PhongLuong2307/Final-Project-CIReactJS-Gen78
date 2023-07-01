import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import BlogItem from './components/Blogs/BlogItem';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import Admin from './pages/Admin';
import Login from './pages/Login';
import TimeTable from './pages/TimeTable';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';

function App() {

  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/timetable' element={<TimeTable />} />
        <Route path='/blog' element={<BlogItem />}>
          <Route
            path=':idBlog'
            element={<BlogItem />}
          />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </React.Fragment >
  );
}

export default App;
