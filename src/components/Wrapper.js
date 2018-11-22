import React from 'react';

const wrapperStyles = {
  alignItems: 'center',
  backgroundColor: 'white',
  border: '2px solid seagreen',
  borderRadius: '8px',
  color: '#0c0c0c',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 8px 8px',
  padding: '16px 16px 24px'
}

const Wrapper = props => (
  <section style={wrapperStyles} {...props} />
);

export default Wrapper;