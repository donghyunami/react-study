import React from 'react';

function User({ user, onRemove, onEdit }) {
  const handleEdit = e => {
    const editContext = window.prompt('수정할 이름을 입력하세요');
    onEdit(editContext, user.id);
  };
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={handleEdit}>수정</button>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onEdit }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default UserList;
