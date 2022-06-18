import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  const onClickEnther = e => setMessage('안녕하세요!');
  const onClickLeave = e => setMessage('다음에 만나요!');

  return (
    <div>
      <button onClick={onClickEnther}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={e => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={e => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={e => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
