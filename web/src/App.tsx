import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodosClient} from "../../server/web_codegen/TodosServiceClientPb"
import {GetTodosRequest} from '../../server/web_codegen/todos_pb'

const client = new TodosClient('http://0.0.0.0:50051')

function App() {
  const getTodos = () => {
    const request = new GetTodosRequest()
    client.getTodos(request, {})
  }

  useEffect(() => {
    window.getTodos = getTodos
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
