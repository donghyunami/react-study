import React, { useEffect, useRef, useState } from 'react';

function CounterDown() {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);
  const time = useRef(60);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우
    if (time.current < 0) {
      console.log('타임 아웃');
      clearInterval(timerId.current);
    }
  }, [sec]);

  return (
    <div className='App'>
      <h1>CounterDown!!</h1>
      <div>
        <h2>
          {min}:{sec < 10 ? `0${sec}` : sec}
        </h2>
      </div>
      <span>{time.current < 0 && 'GameOver'}</span>
    </div>
  );
}

export default CounterDown;


/* 

 출처
  → https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
*/