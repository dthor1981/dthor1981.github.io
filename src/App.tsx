/*** React ***/
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/*** Styles ***/
import './App.css';

/*** Layout ***/
import Header from './layouts/headers/mainHeader';
import Footer from './layouts/footers/mainFooter';

/*** Components ***/
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
class App extends React.Component {

  render() {
    return <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  }
}

export default App;
