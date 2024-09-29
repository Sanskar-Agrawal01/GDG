import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Mission from './components/Mission';
import Details from './components/Details';
import FAQs from './components/FAQs';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Mission/>
 <Details/>
 <Technologies/>
 <FAQs/>
 <Footer/>
      
    </div>
  );
}

export default App;