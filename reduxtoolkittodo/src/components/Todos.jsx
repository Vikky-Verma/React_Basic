import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 
                  1.022.166m-1.022-.165L18.16 19.673A2.25 2.25 0 0115.916 
                  21.75H8.084a2.25 2.25 0 01-2.244-2.077L4.772 
                  5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 
                  .562c.34-.059.68-.114 1.02-.165m0 
                  0a48.11 48.11 0 013.478-.397m7.5 
                  0V4.5c0-1.19-.91-2.164-2.09-2.201a51.964 
                  51.964 0 00-3.32 0C9.91 2.336 9 
                  3.31 9 4.5v.893m7.5 0a48.667 
                  48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;