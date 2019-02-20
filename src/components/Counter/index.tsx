import * as React from 'react';

type CounterProps = {
  num: number;
};

const Counter: React.FC<Readonly<CounterProps>> = ({ num }) => <div>{num}</div>;
export default Counter;
