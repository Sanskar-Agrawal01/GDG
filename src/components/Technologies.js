import React from 'react';
import './Technologies.css';
import t1 from './t1.png'; 
import t2 from './t2.png'; 
import t3 from './t3.png'; 
import line1 from './line1.png';

export default function Technologies() {
  return (
    <div className="container">
      <div className="header-container"> 
        {/* Wrap image and text in a container */}
        <img src={line1} alt="Technologies Background" className="header-image" />
        <h2  className="header-text"style={{fontSize:'70px'}}>Technologies</h2>
      </div>
      <p className="subheader"><br></br>Domains That Excite Us to Collaborate and Teach!</p>
      <div className="tech-cards">
        <div className="tech-card">
          <img src={t1} alt="Android" />
          
        </div>
        <div className="tech-card">
          <img src={t2} alt="Flutter" />
          
        </div>
        <div className="tech-card">
          <img src={t3} alt="Cloud" />
          
        </div>
      </div>
    </div>
  );
}
