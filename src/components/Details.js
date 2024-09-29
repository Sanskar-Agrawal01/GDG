import React from 'react';
import './Details.css'; // Import a CSS file for styling

export default function Details() {
  const data = [
    { value: '03+', label: 'Years' },
    { value: '10+', label: 'Events' },
    { value: '1K+', label:'Community' },
    { value: '200+', label: 'Attendees' }
  ];

  return (
    <div className="details-container">
      {data.map((item, index) => (
        <div key={index} className="detail-item">
          <div className="circle">
            <span className="value">{item.value}</span>
          </div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}