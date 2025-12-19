// src/app/test.tsx
import React from 'react';

interface Props {
  name: string;
  age: number;
}

const TestComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

export default TestComponent;
