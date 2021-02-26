import { configureStore } from '@reduxjs/toolkit';

import tarefaReducer from '../features/tarefas/tarefaSlice'
import cardReducer from '../features/card/cardStateSlice'

export default configureStore({
  reducer: {
    tarefa: tarefaReducer,
    card: cardReducer
  },
});
