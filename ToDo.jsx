import React, { useState } from "react";
import { Link } from "react-router-dom";

function ToDo(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() === "") {
            return;
        }

        setTasks(t => [...t, newTask.trim()]);
        setNewTask("");
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i ) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1] ] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1] ] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <Link className="buttonHome" to="/">Back to Home</Link>

            <div>
                <h1>ToDo-List</h1>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="addbtn" onClick={addTask}>Add</button>
            </div>
            <ol className="liste">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="deletebtn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="movebtn" onClick={() => moveTaskUp(index)}>↑</button>
                        <button className="movebtn" onClick={() => moveTaskDown(index)}>↓</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDo