import React from 'react';

function Hello({ color, name }) {
  return (
    <div>
      안녕하세요 제 이름은 <span style={{ color }}>{name}</span>입니다.
    </div>
  );
}

Hello.defaultProps = {
  name: '이름 미지정',
  color: 'pink',
};
export default Hello;
