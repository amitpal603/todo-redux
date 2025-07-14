import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Your Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-800 text-white flex justify-between items-center px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(remove(todo.id))}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-200"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
