import React, { useState, useEffect, useRef } from 'react';

import Button from './components/Button';
import Wrapper from './components/Wrapper';
import HookNorrisSays from './components/HookNorrisSays';
import LastTime from './components/LastTime';

const HookNorris = () => {
  const [saying, setSaying] = useState();
  const [sayingTime, setSayingTime] = useState();
  const [loading, setLoading] = useState();
  const [tooMuchDelay, setTooMuchDelay] = useState();
  const lastTime = useRef(null);
  
  //declare handler
  const handleClick = async () => {    
    lastTime.current = sayingTime;
    setLoading(true);
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const { value } = await response.json();
    setSaying(value);
    setSayingTime(Date.now());
    setLoading(false);
  }

  //componentDidMount by passing a static value as second parameter
  useEffect(handleClick, []);

  //componentDidUpdate, watching the current state and comparing to the previous one saved as a ref
  useEffect(() => {
    if (lastTime.current ) {
      const diff = sayingTime - lastTime.current;
      if (diff > 10000) {
        setTooMuchDelay(true);
      } else {
        setTooMuchDelay(false);
      }
    }
  }, [sayingTime]);
  
  return (
    <Wrapper>
      <HookNorrisSays saying={saying} extra="Base hooks"/>
      <Button onClick={handleClick} loading={loading} />
      <LastTime sayingTime={sayingTime} tooMuchDelay={tooMuchDelay} />
    </Wrapper>
  );
};

export default HookNorris;