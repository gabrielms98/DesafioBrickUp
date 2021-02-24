import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tarefaReducer from '../features/tarefas/tarefaSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    tarefa: tarefaReducer
  },
});
