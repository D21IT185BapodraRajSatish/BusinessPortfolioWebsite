import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import './App.css'
function App() {
  
  


  return (
    <Router>
      <div>
          {/* Header Component */}
          <Header />

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
      </div>
    </Router>
  )
}

export default App
