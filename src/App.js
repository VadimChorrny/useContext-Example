import React, { useState } from 'react';
import Counter from './components/Counter';
import IsSeven from './components/IsSeven';
import './styles/Index.css';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>Counter 1</h1>
      <div className='counter'>
        <button
          onClick={() => {
            setCount1(count1 + 1);
          }}
        >
          +
        </button>
        <Counter id={1} value={count1} />
      </div>
      <div className='counter'>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Counter id={2} value={count2} />
        <IsSeven value={count2} />
      </div>
    </div>
  );
}

export default App;
