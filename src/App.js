import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Navbar />
        <Main />
        test2 
         */}
         <Navbar />
       {/* <Main /> */}
        <Footer />
    </div>
  );
}

export default App;
