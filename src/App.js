import React from 'react';

function App() {
  const title = '리액트';
  const text = '리액트는 사용자 인터페이스를 만들기 위한 라이브러리이다.';
  const name = 'react';

  /* 리액트에서 스타일 적용하기 */
  const Container = {
    margin: 0,
  };
  const Header = {
    marginBottom: '10px',
    padding: '15px',
    background: 'lightgray',
    fontSize: '18px',
  };
  const p = {
    background: 'lightgray',
    border: '2px solid #fff',
  };

  return (
    <div style={Container}>
      <header>
        {title === '리액트' ? (
          <h1 style={Header}>{text}</h1>
        ) : (
          <h2 style={Header}>자바스크립트입니다.</h2>
        )}
      </header>
      {/* 조건에 해당하는 경우에만 랜더링합니다. */}
      <p>{name === 'react' ? <h1 style={p}>{name}입니다.</h1> : null}</p>
      <p>
        {/* 짧은 연산자를 사용하면 위 삼항연산자를 좀 더 간단하게 작업할 수 있습니다. */}
        {name === 'react' && <h1 style={p}>{name}입니다.</h1>}
      </p>
    </div>
  );
}

export default App;
