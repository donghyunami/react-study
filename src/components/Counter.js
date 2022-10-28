import React, { useReducer } from 'react';

// 상태 업데이트 로직
function reducer (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');    
  }
}

 export default function Counter () {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = function () {
    dispatch({
      type: 'INCREMENT'
    })
  };

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};
