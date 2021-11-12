import React, { useRef } from 'react';
import './App.scss';
import Payment from './components/Payment.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="App">
      <div id = "main-content">
        <Info />
        <Payment />
      </div>
      <Footer />
    </div>
  );
}

export default App;
