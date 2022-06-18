import React from 'react';

function Button({ children }) {
  console.log({ children }); // {children: '버튼'}
  return <button>{children}</button>;
}

export default Button;
