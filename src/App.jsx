import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  const [darkToggle, setDarkToggle] = useState(true);

  const toggle = () => setDarkToggle(!darkToggle);

  return (
    <div className={`h-full min-h-screen flex w-full ${darkToggle ? 'dark' : ''}`}>
      <div className={`min-w-full  mx-auto ${darkToggle ? 'dark:bg-black' : ''}`}>
        <Nav toggle={toggle} darkMode={toggle} />
        <SearchBar darkMode={darkToggle} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
