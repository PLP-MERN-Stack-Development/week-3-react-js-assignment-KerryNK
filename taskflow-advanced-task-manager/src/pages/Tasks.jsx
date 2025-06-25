import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTheme } from '../hooks/useTheme';
import Card from '../components/Card';

const Tasks = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [taskInput, setTaskInput] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'Completed') return task.completed;
        if (filter === 'Active') return !task.completed;
        return true;
    });

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="border p-2 mb-4 w-full"
                placeholder="Add a new task"
            />
            <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded">Add Task</button>
            <div className="mt-4">
                <button onClick={() => setFilter('All')} className="mr-2">All</button>
                <button onClick={() => setFilter('Active')} className="mr-2">Active</button>
                <button onClick={() => setFilter('Completed')} className="mr-2">Completed</button>
            </div>
            <div className="mt-4">
                {filteredTasks.map(task => (
                    <Card key={task.id} className="mb-2">
                        <div className="flex justify-between items-center">
                            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                            <div>
                                <button onClick={() => toggleTaskCompletion(task.id)} className="mr-2">Toggle</button>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Tasks;