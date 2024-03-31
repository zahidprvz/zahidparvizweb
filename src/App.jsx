import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="pt-2 pb-2 flex-grow mb-20"> {/* Add mb-20 for bottom margin */}
          <Routes> 
            <Route path="/" element={<Projects />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
