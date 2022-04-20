
import './App.css';
import Header from './layouts/headers/mainHeader';
import React from 'react';
// import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return <React.StrictMode>
      <Header />
    </React.StrictMode>
  }
}

export default App;
