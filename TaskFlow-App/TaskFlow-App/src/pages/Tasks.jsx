import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button';
import Card from '../components/Card';

const Tasks = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
    });

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <div className="mb-4">
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    className="border p-2 mr-2"
                    placeholder="Add a new task"
                />
                <Button onClick={addTask}>Add Task</Button>
            </div>
            <div className="mb-4">
                <Button onClick={() => setFilter('All')}>All</Button>
                <Button onClick={() => setFilter('Active')}>Active</Button>
                <Button onClick={() => setFilter('Completed')}>Completed</Button>
            </div>
            <div>
                {filteredTasks.map(task => (
                    <Card key={task.id} title={task.text}>
                        <Button onClick={() => toggleTaskCompletion(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </Button>
                        <Button onClick={() => deleteTask(task.id)}>Delete</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Tasks;