import * as React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactChild;
};

const Button: React.FC<Readonly<ButtonProps>> = ({ onClick, children }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
export default Button;
