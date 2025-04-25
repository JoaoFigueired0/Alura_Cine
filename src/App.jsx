import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Olá Mundo! Contador: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
}

export default App;