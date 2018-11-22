import React from 'react';

const baseStyles = {
  border: 'none',
  borderRadius: '4px',
  color: 'white',
  marginBottom: '8px',
  padding: '8px 16px'
}

const getStyles = loading => loading ? ({
  
  ...baseStyles
}) : ({
  backgroundColor: 'seagreen',
  cursor: 'pointer',
  ...baseStyles
});

const Button = props => (
  <button style={getStyles(props.loading)} disabled={props.loading} onClick={props.onClick}>
    {props.loading ? 'Loading...' : 'Request new saying!'}
  </button>
);

export default Button;