import React from 'react';

const HookNorris = ({ saying, extra }) => (
  <React.Fragment>
    <h2 style={{margin: 0, marginBottom: '4px'}}>
      Hook Norris says: {extra}
    </h2>
    <div style={{marginBottom: '8px', textAlign: 'center'}}>
      {saying}
    </div>
  </React.Fragment>
);

export default HookNorris;