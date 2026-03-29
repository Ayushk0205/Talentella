import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StaticBackground from './components/StaticBackground';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="page-container">
          <StaticBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServicePage />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
