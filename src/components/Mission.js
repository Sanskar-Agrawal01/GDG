import React from 'react';
import './Mission.css';
import missionImage from './mission-image.png';
import perspectiveImage from './perspective-image.png';
import motivationImage from './motivation-image.png';
import sub1 from './Subtract.png';
import sub2 from './Subtract2.png';
import sub3 from './Subtract3.png';
export default function Mission() {
    return (
      <div className="mission-container">
        <Section 
          title="Our Mission" 
          imageSrc={missionImage} 
          altText="Mission Image"
          description="Our mission involves community engagement, leadership development, building strong tech foundations, while enabling all tech enthusiasts to contribute to the global society."
          position="left"
          className="mission"
          imageSrc1={sub1} 
          altText1="Mission Image"

        />
        <Section 
          title="Our Perspective" 
          imageSrc={perspectiveImage} 
          altText="Perspective Image"
          description="We're a community-driven initiative aiming to bridge the gap between research and practice, develop participatory thinking and prototyping throughout projects. We believe in respecting fellow developers, fostering collaboration and working for a solution-driven team."
          position="right"
          className="perspective"
           imageSrc1={sub2} 
          altText1="pers Image"
        />
        <Section 
          title="What Keeps Us Going?" 
          imageSrc={motivationImage} 
          altText="Motivation Image"
          description="Our club helps students to connect, learn, empower and grow. Teamwork, inclusiveness, and knowledge sharing are at the core of our mission. The entire idea works in conjunction with improving the skills and collective horizon of knowledge."
          position="left"
          className="motivation"
           imageSrc1={sub3} 
          altText1="moto Image"
        />
      </div>
    );
  }
  
  function Section({ title, imageSrc, altText, description, position, className,imageSrc1, altText1 }) {
    return (
      <div className={`section ${position} ${className}`}>
        <h2>{title}</h2>
        <div className="content">
          <img src={imageSrc} alt={altText} />
          <p>{description}</p>
          <img src={imageSrc1} alt={altText1} />
        </div>
      </div>
    );
  }