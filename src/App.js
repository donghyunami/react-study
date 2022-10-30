import React, { useRef } from 'react';
import UserList from './components/UserList';

const App = () => {
  const users = [
    {
      id: 1,
      username: 'lee',
      email: 'publick12@gmai.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester123@gmai.com',
    },
    {
      id: 3,
      username: 'kim',
      email: 'kim12vel@gmai.com',
    },
  ];

  // useRef 사용
  const nextId = useRef(4);

  const onCreate = () => {
    // 나중에 구현 할 배열에 항복을 추가하는 로직
    // ...

    console.log(nextId.current); //4
    nextId.current += 1;
    /* 
      이 값(useRef 변수에 저자된 값)이 바뀐다고 
      컴포넌트가 리랜더링 되지 않음
    */
  };

  return <UserList users={users} />;
};

export default App;
