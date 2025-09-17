import React, { useState, useEffect } from "react";
import "./feedback.css";

const Feedback = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [Excellent, setExcellent] = useState(0);
  const [Good, setGood] = useState(0);
  const [Average, setAverage] = useState(0);
  const [Poor, setPoor] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [reset, setReset] = useState(0);
  const [increment5, setIncrement5] = useState(0);
  const [total, setTotal] = useState(0);

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="feedback">
      <div className="name">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button
          onClick={() => {
            alert(`Welcome ${firstName} ${lastName}!`);
          }}
        >
          Submit
        </button>
        <label className="time">
          <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        </label>
      </div>
      <div className="feedback-section">
        <h1>Feedback</h1>
        <button
          onClick={() => {
            alert("Feedback submitted!");
            setExcellent(Excellent + 1);
            setTotalFeedback(totalFeedback + 1);
          }}
        >
          Excellent
        </button>
        <button
          onClick={() => {
            alert("Feedback submitted!");
            setGood(Good + 1);
            setTotalFeedback(totalFeedback + 1);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            alert("Feedback submitted!");
            setAverage(Average + 1);
            setTotalFeedback(totalFeedback + 1);
          }}
        >
          Average
        </button>
        <button
          onClick={() => {
            alert("Feedback submitted!");
            setPoor(Poor + 1);
            setTotalFeedback(totalFeedback + 1);
          }}
        >
          Poor
        </button>
      </div>

      <div className="feedback-summary">
        <h2>Feedback Summary</h2>
        <p>Excellent: {Excellent}</p>
        <p>Good: {Good}</p>
        <p>Average: {Average}</p>
        <p>Poor: {Poor}</p>
        <p>TotalFeedback: {totalFeedback}</p>
      </div>
      <div className="feedback-personal">
        <h2> Personal Feedback</h2>
        <button
          onClick={() => {
            setIncrement(increment + 1);
            setTotal(total + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setDecrement(decrement + 1);
            setTotal(total - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setIncrement5(increment5 + 5);
            setTotal(total + 5);
          }}
        >
          Increment by 5
        </button>
        <button
          onClick={() => {
            setReset(reset + 1);
            setIncrement(0);
            setDecrement(0);
            setIncrement5(0);
            setTotal(0);
          }}
        >
          Reset
        </button>
        <p>Increment Count: {increment}</p>
        <p>Decrement Count: {decrement}</p>
        <p>Increment by 5 Count: {increment5 / 5}</p>
        <p> Total: {total}</p>
        <p>Reset Count: {reset}</p>
      </div>
    </div>
  );
};

export default Feedback;
