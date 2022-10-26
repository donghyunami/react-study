import React, { useEffect } from 'react';


// deps 에 특정 값 넣기
function User({ user, onRemove, onToggle }) {

  const {username, email, id, active} = user;
  
  useEffect(() => {
    //특정값이 업데이트된 즉후에 실행
    //처음 컴포넌트가 나타날때에도 실행
    console.log('user값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 값이 바뀌기전');
      console.log(user);
    }
  }, [user]);


  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: active ? 'green' : 'black'
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;