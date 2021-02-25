import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        isAddingTask: false
    },
    reducers: {
        add: state => {
            state.isAddingTask = !state.isAddingTask
        }
    }
})

export const { add } = cardSlice.actions

export const isAddingTask = state => state.card.isAddingTask

export default cardSlice.reducer