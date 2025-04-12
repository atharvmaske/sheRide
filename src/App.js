import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'; 
import Home from './components/Home';
import Services from './components/Services';
import BookRide from './components/BookRide';
import Pricing from './components/Pricing';
import DriverRegistration from './components/DriverRegistration';
import Login from './components/Login';
import Registration from './components/Registration';
import { AuthProvider } from './AuthContext'; 

function App() {
  return (
    <AuthProvider> 
      <Router>
        <div className="App">
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/BookRide" element={<BookRide />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/DriverRegistration" element={<DriverRegistration />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
