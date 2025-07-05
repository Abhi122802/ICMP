import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home/home';
import Header from './components/Header/header';
// import { About } from './pages/About';
import Footer from './components/footer/footer';
import Courses from './pages/courses/Courses';
import CourseDetails from './pages/CourseDetails';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
