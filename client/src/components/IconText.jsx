import React from 'react';

const IconText = ({ icon, text, color, fontWeight }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', color, fontWeight }}>
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

export default IconText;
