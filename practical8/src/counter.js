import React, { useState, useEffect } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch count from backend on mount
  useEffect(() => {
    fetch('http://localhost:5000/counter')   // ✅ API endpoint
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load counter');
        setLoading(false);
      });
  }, []);

  // Update count on server
  const updateCount = newCount => {
    setLoading(true);
    fetch('http://localhost:5000/counter', {   // ✅ API endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: newCount })
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to update');
        return res.json();
      })
      .then(data => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not update counter');
        setLoading(false);
      });
  };

  const increment = () => updateCount(count + 1);
  const decrement = () => updateCount(count > 0 ? count - 1 : 0);
  const reset = () => updateCount(0);

  return (
    <div className="counter-container">
      <h1>💪 Gym Rep Counter</h1>
      {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
      <div className="counter-display">{loading ? '...' : count}</div>
      <div className="counter-buttons">
        <button onClick={decrement} aria-label="Decrease reps" disabled={loading}>-</button>
        <button onClick={increment} aria-label="Increase reps" disabled={loading}>+</button>
      </div>
      <button className="reset-btn" onClick={reset} aria-label="Reset reps" disabled={loading}>Reset</button>
    </div>
  );
}

export default Counter;
