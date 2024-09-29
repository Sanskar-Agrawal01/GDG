import React from 'react';
import './Header.css';
import objectsImage from './OBJECTS.png';
import arrowImage1 from './arrow1.png'; // Import first arrow image
import arrowImage2 from './arrow2.png'; // Import second arrow image
import arrowImage3 from './arrow3.png'; // Import third arrow image

export default function Header() {
    return (
        <>
            <div className='header-container'>
                <div className='logo'>
                    <span style={{ color: 'rgba(66, 133, 244)' }}>G</span>
                    <span style={{ color: 'rgba(219, 68, 55)' }}>o</span>
                    <span style={{ color: 'rgba(244, 180, 0)' }}>o</span>
                    <span style={{ color: 'rgba(66, 133, 244)' }}>g</span>
                    <span style={{ color: 'rgba(15, 157, 88)' }}>l</span>
                    <span style={{ color: 'rgba(219, 68, 55)' }}>e</span> Developer Groups
                </div>
                <div className='RBU-CH'>
                    RBU Chapter
                </div>
                <img src={objectsImage} alt="Illustration" className='illustration' />
                <div className='subtext'>
                    Google Developer Groups are community groups for college and university students interested in Google developer technologies.
                </div>
                <button className="btn font-family:Product Sans align:center my-5" type="submit" ><p style={{textAlign:'center',marginTop:'50'}}>JOIN US</p></button>
            </div>

            {/* New Section */}
            <div className='know-us-section'>
                <div className='arrows'>
                    <img src={arrowImage1} alt='Arrow 1' className='arrow' />
                    <img src={arrowImage2} alt='Arrow 2' className='arrow' />
                    <img src={arrowImage3} alt='Arrow 3' className='arrow' />
                </div>
                <h2>Get To Know Us!</h2>
            </div>
        </>
    );
}