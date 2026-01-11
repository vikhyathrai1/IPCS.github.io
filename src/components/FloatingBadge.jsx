import React from 'react';
import './FloatingBadge.css';
import niphmBadge from '../assets/niphm-badge.png';

const FloatingBadge = () => {
  return (
    <div className="floating-badge">
      <img src={niphmBadge} alt="NIPHM Approved Badge" />
    </div>
  );
};

export default FloatingBadge;
