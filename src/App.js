import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalWebsite from './screens/HomePage';
import AboutSection from './screens/AboutScreen';
import Projects from './screens/ProjectScreen';
// import Contact from './screens/ContactScreen';

const App = () => {
  return (
    <Router>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<PersonalWebsite />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;