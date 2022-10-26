import React, { useEffect } from 'react';

/* 
   [ 두번째 인자를 넣지 않을 때 ]
   컴포넌트가 리랜더링되고나서 호출됨
   변경된 부분만 호출되지 않고 전체가 다시 랜더링됨
   리액트에서는 부모 컴포넌트가 리랜더링되면, 
   자식 컴포넌트에서도 리랜더링되기 때문
   대부분의 경우(컴포넌트가 적을 때)에는 전체가 다시 랜더링되어도 
   성능에 상관없지만 컴포넌트가 많을 경우엔느 성능을 신경써야함
    → 이때는 바뀐 부분만 랜더링되도록 해줘야한다. (useMemo)
*/
function User({ user, onRemove, onToggle }) {
  const {username, email, id, active} = user;
  
  useEffect(() => {
    console.log(user);
    // 컴포넌트가 리랜더링되고나서 호출됨
    // 변경된 부분만 호출되지 않고 전체가 다시 랜더링됨
  });


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