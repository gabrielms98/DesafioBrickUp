import React from 'react';

import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { AddList } from './components/AddList'

function App() {
    return (
        <>
          <Header />
          <AddList />
          <TodoList />
        </>
    );
}

export default App;
