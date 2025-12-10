import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: 16 }}>
      <h3>Counter</h3>
      <div>Value: {count}</div>

      <div style={{ marginTop: 8 }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())} style={{ marginLeft: 8 }}>
          +
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="amount"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
          style={{ marginLeft: 8 }}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
