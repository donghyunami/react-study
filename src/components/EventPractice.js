import React, { useState } from 'react';

function EventPractice() {
  const [input, setInput] = useState({
    username: '',
    message: '',
  });

  const { username, message } = input;

  const handleChange = e => {
    const { name, value } = e.target; //비구조화 할당을 통해 값 추출
    setInput({
      ...input, // 기존 상태 값을 복사한 뒤
      [name]: value, // 원하는 값을 덮어 씌우기
    });
  };

  // onKeyPress 이벤트 발생할 때 처리할 함수
  const handleClick = e => {
    console.log(`${username}: ${message}`);

    setInput({
      username: '',
      message: '',
    });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        onChange={handleChange}
        value={username}
      />
      <input
        name="message"
        placeholder="메시지 입력!"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={message}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default EventPractice;
