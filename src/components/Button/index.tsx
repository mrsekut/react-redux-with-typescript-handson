import * as React from 'react';

const Button = ({ children, onClick }: any) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
export default Button;
