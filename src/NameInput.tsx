import React, { useState, ChangeEvent } from 'react';

const NameInput: React.FC = () => {
  const [name, setName] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log('event: ' + event);
    console.log('event: ' + JSON.stringify(event.target.value));
  };

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input 
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        id="name" 
        value={name} 
        onChange={handleInputChange} 
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default NameInput;
