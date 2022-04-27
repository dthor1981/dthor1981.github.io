
import './App.css';
import Header from './layouts/headers/mainHeader';
import Footer from './layouts/footers/mainFooter';
import React from 'react';
// import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return <React.StrictMode>
      <Header />
      Test
       <Footer />
    </React.StrictMode>
  }
}

export default App;
