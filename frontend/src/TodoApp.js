import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';
import TodoItem from './components/TodoItem';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodos = async () => {
            const { data } = await getTodos();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    const handleAddTodo = async () => {
        const { data } = await createTodo({
            title,
        });
        setTodos([...todos, data]);
        setTitle('');
    };

    const handleToggleComplete = async (id, completed) => {
        const { data } = await updateTodo(id, { completed });
        setTodos(todos.map((todo) => (todo._id === id ? data : todo)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-3">
                <h2>Todo List</h2>
                <button className="btn btn-secondary" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add A Brand New Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleAddTodo}>
                        Add
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onToggleComplete={() => handleToggleComplete(todo._id, !todo.completed)}
                        onDelete={() => handleDeleteTodo(todo._id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
