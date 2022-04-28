
import './App.css';
import Header from './layouts/headers/mainHeader';
import Footer from './layouts/footers/mainFooter';
import React from 'react';
import { Outlet } from "react-router-dom";
// import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return <React.StrictMode>
      <Header />
      <Outlet />
      <Footer />
    </React.StrictMode>
  }
}

export default App;
