import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
//import Services from './components/Services';
//import Portfolio from './components/Portfolio';
//import Clients from './components/Clients';
//import Connect from './components/Connect';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id='home'>
      <Navbar />

      <section className="about-section" id='about'>
        <About />
      </section>

      <Footer />
    </div>
  );
}

export default App;
