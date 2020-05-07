import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  console.log({ count })
  return (
    <div>

      <input onChange={(e) => setCount(e.target.value)} placeholder='Choisis ta valeur' />
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(parseInt(count) + 1)}>
        +1
      </button>
      <button onClick={() => setCount(parseInt(count) - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;