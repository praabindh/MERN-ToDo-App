import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            >
                {todo.title}
            </span>
            <div>
                <button className="btn btn-sm btn-success mr-2" onClick={onToggleComplete}>
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button className="btn btn-sm btn-danger" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
