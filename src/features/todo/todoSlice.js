import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1,text: "Hey Amit"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = { id : nanoid(),
            text : action.payload
            }
            state.todos.push(todo)
        },
        
        remove : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id  !== action.payload)
        }
    }
})

export const {addTodo,remove} = todoSlice.actions

export default todoSlice.reducer