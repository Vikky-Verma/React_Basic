import {createSlice, nanoid} from '@reduxjs/toolkit';

// nanoid is a library that generates unique ids. We will use it to generate unique ids for our todos.
// createSlice is a function that takes an object as an argument and returns an object with three properties: name, reducer, and actions. We will use it to create a slice of our state for our todos.

const initialState = {
    todos: [{id:1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo ={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})


export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;