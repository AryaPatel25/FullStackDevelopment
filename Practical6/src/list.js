import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./list.css";

function List() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [wasListening, setWasListening] = useState(false); // new flag

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startVoiceInput = () => {}
    const addTask = () => {
        const trimmed = input.trim();
        if (!trimmed) {
            alert("Please enter a task.");
            return;
        }
        setTasks([...tasks, { text: trimmed, completed: false }]);
        setInput("");
    };

    const removeTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i !== index));
    };

    const editTask = (index) => {
        const newText = prompt("Edit task:", tasks[index].text);
        if (newText && newText.trim()) {
            const updated = [...tasks];
            updated[index].text = newText.trim();
            setTasks(updated);
        }
    };

    const markComplete = (index) => {
        alert("Task marked as complete!");
        removeTask(index);
    };

    return (
        <div className="todo-list">
            <h1>Get Things Done!</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="What is the task today?"
                />
                <button onClick={addTask}>Add Task</button>
                <button onClick={startVoiceInput} className="icon-btn">🎤</button>
            </div>

            {listening && <p className="listening-text">🎙️ Listening... Speak now</p>}

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task.text}</span>
                        <div>
                            <button onClick={() => markComplete(index)} className="icon-btn">✅</button>
                            <button onClick={() => editTask(index)} className="icon-btn"><FaEdit /></button>
                            <button onClick={() => removeTask(index)} className="icon-btn"><MdDelete /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
