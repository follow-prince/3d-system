import React from 'react';

import './Card.css'; // Import the CSS file for styling

const ProfileCard: React.FC = () => {
    const stars = Array.from({ length: 7 }, (_, index) => (
        <div key={index} id={`star-${index + 1}`}>
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>
      ));
    
    return (
        <div className="section-banner">
        {stars}
      </div>
  
  
    );
};

export default ProfileCard;
