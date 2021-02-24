import { createSlice } from '@reduxjs/toolkit'
import { getAllTarefas } from '../../Api'

export const tarefaSlice = createSlice({
    name: 'tarefa',
    initialState: {
        value: []
    },
    reducers: {
        add: state => {
            getAllTarefas()
                .then(res => console.log(res))
        }
    }
})

export const { add } = tarefaSlice.actions;

export default tarefaSlice.reducer