import React from 'react';
import './App.css';
import './static/Mystyles.css'
import Footer from './Footer';
import MyNavbar from './MyNavbar';
import Mainpage from './Mainpage';

function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <Mainpage/>
    <Footer/>
    </div>
  );
}

export default App;
