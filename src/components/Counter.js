import React, { useEffect } from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = e => {
    setCount(preState => preState + 1);
  };

  const handleDecrease = e => {
    setCount(preState => (preState > 0 ? preState - 1 : 0));
    // 0 보다 작으면 0으로 변경
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleIncrease}>
        증가
      </button>
      <button type="button" onClick={handleDecrease}>
        감소
      </button>
    </div>
  );
}

export default Counter;
