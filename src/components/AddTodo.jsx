import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="flex justify-center items-center mt-12 px-4">
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-xl"
      >
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-white py-2 px-4 transition duration-200 outline-none placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
