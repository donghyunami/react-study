import React from 'react';
import { propTypes } from 'prop-types';

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

Hello.propTypes = {
  name: propTypes.string.isRequired, // 타입은 문자열로 설정하지 않거나 name 값이 없다면 에러 발생
  color: propTypes.string,
};
export default Hello;
