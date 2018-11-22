import React from 'react';

const LastTime = ({sayingTime, tooMuchDelay}) => (
  <React.Fragment>
    {sayingTime && (
      <i style={{display: 'block'}}>Last saying received at: {new Date(sayingTime).toISOString()}</i>
    )}
    {tooMuchDelay && (
      <i style={{display: 'block', fontSize: '.8em'}}>The new saying was received with 10 seconds of delay from the previous one</i>      
    )}
  </React.Fragment>
);

export default LastTime;