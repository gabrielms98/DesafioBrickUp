import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import tarefaReducer from '../features/tarefas/tarefaSlice'
import cardReducer from '../features/card/cardStateSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    tarefa: tarefaReducer,
    card: cardReducer
  },
});
