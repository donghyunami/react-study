import React from 'react';
import './App.css';

function App() {
  const name = '리액트';

  const style = {
    background: 'black',
    color: 'aqua',
    fontSize: '32px', // font-size → fontSize
    fontWeight: 'bold', //font-weight → fontWeight
    padding: 16, // 단위를 생략하면 px로 지정됨
  };
  return (
    <div>
      <h1 style={style}>{name}</h1>
      <nav>
        <ul className="menu">
          <li className="item">HTML</li>
          <li className="item">CSS</li>
          <li className="item">JavaScript</li>
          <li className="item">React</li>
        </ul>
      </nav>
    </div>
  );
}
export default App;
