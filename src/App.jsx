import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:cid" element={<ShowDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
