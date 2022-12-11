import '../../components/App/App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Navigation from '../../layout/Navigation';
import Footer from '../../layout/Footer';
  
function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
