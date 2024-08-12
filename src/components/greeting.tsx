import React from 'react';

// Define the interface for props
interface GreetingProps {
  name: string; 
}

// Apply the interface to the component
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;
