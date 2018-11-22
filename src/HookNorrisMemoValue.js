import React, { useState, useEffect, useRef, useMemo } from 'react';

import Button from './components/Button';
import Wrapper from './components/Wrapper';
import HookNorris from './components/HookNorrisSays';
import LastTime from './components/LastTime';
import TimeHash from './components/TimeHash'

const useRequest = () => {
  const [saying, setSaying] = useState();
  const [sayingTime, setSayingTime] = useState();
  const [loading, setLoading] = useState();
  const [tooMuchDelay, setTooMuchDelay] = useState();
  const lastTime = useRef(null);

  const btoaTime = useMemo(() => btoa(sayingTime), [tooMuchDelay]);

  //declare handler
  const handleClick = async () => {    
    lastTime.current = sayingTime;
    setLoading(true);
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const { value } = await response.json();
    setSaying(value);
    setSayingTime(Date.now());
    setLoading(false);
  };

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

  return [saying, sayingTime, loading, tooMuchDelay, btoaTime, handleClick];
};

const ChuckNorrisSays = () => {
  const [saying, sayingTime, loading, tooMuchDelay, btoaTime, handleClick] = useRequest();
  
  return (
    <Wrapper>
      <HookNorris saying={saying} extra="Memoizing a hash value" />
      <Button onClick={handleClick} loading={loading} />
      <LastTime sayingTime={sayingTime} tooMuchDelay={tooMuchDelay} />
      <TimeHash btoaTime={btoaTime} />
    </Wrapper>
  );
};

export default ChuckNorrisSays;