import React from 'react';

function App() {
  // const username = undefined;
  const username = undefined;
  // return username || '빈값입니다.'; 이런식으로 랜더링해야 한다.

  /* jsx 안에서는 undefined 랜더링 가능 */
  return <div>{username} </div>;
}
export default App;
