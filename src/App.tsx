
import './App.css';
import Header from './layouts/headers/mainHeader';
import Footer from './layouts/footers/mainFooter';
import React from 'react';
import MainMenu from './components/menu';
import { Home } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
// import { Router } from 'react-bootstrap-icons';
// import mainRoutes from './routes/mainRoutes';
class App extends React.Component {

  render() {
    return <React.StrictMode>
      <Header />
      <MainMenu />
      <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
          </Routes>
      <Footer />
    </React.StrictMode>
  }
}

export default App;
