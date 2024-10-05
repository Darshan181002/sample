import React from 'react';

const Probox = ({ children, style }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', ...style }}>
      {children}
    </div>
  );
};

export default Probox;
