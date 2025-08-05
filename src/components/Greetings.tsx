import React, { useState } from 'react';

const Greeting: React.FC = () => {
  const [name, setName] = useState('Tshwane');

  const handleClick = () => {
    setName('Friend');
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default Greeting;