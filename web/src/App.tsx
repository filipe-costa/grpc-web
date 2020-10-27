import React, { useEffect, useState, ChangeEvent, KeyboardEvent } from 'react'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import {useToasts} from 'react-toast-notifications'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import {TodosHeader} from "./components/TodosHeader"
import {TodosList} from './components/TodosList'

import {
  Todo
} from "./codegen/todos_pb"

import {
  generateUuid
} from './utils/uuidGenerator'

import service from "./services/todos"

function App() {
  const classes = useStyles()
  const {addToast} = useToasts()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [todos, setTodos] = useState<Todo.AsObject[]>()
  const [todo, setTodo] = useState('')

  const editTodo = ({uuid, done, description}: Todo.AsObject) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((todo) => todo.uuid === uuid)
    if (index >= 0) {
      newTodos[index] = {uuid, done, description}
      setTodos(newTodos)
      service.editTodo({uuid, done, description})
        .then(() => {
          addToast('Edited Todo', {appearance: 'success', autoDismiss: true})
        })
        .catch((error) => {
          addToast(error.message, {appearance: 'error', autoDismiss: true})
        })
    }
  }

  const deleteTodo = (uuid: string) => {
    const newTodos = todos?.filter((todo) => todo.uuid !== uuid)
    if (newTodos) {
      setTodos(newTodos)
  
      service.deleteTodo({uuid})
        .then(() => {
          addToast('Deleted Todo', {appearance: 'success', autoDismiss: true})
        })
        .catch((error) => {
          addToast(error.message, {appearance: 'error', autoDismiss: true})
        })
    }
  }

  const addTodo = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && todo.length > 0) {
      const newTodo = {
        uuid: generateUuid(),
        description: todo,
        done: false
      }
      const newTodos = [newTodo, ...todos]
      setTodos(() => newTodos)
      service.createTodo(newTodo)
      .then((res) => {
        const index = newTodos.findIndex(({uuid}) => newTodo.uuid === uuid)
        if (index >= 0) {
          const newTodosResponse = [...newTodos]
          newTodosResponse[index] = res.toObject()
          setTodos(() => newTodosResponse)
          addToast('Created Todo', {appearance: 'success', autoDismiss: true})
        }
      })
      .catch((error) => {
        addToast(error.message, {appearance: 'error', autoDismiss: true})
      })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  useEffect(() => {
    setIsLoading(true)
    // @ts-ignore
    service.getTodos()
      .then((res) => {
        setTodos(res.toObject().todosList)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Grid container justify="center">
          {(!isLoading && error) && (
            <div> Oops, something went wrong!</div>
          )}
          {(isLoading && !error) && (
            <CircularProgress disableShrink />
          )}
          {(!isLoading && !error && todos) && (
            <>
              <TodosHeader onKeyDown={addTodo} onChange={handleChange} value={todo} />
              <TodosList 
                todos={todos}
                onDelete={deleteTodo}
                onComplete={editTodo} />
            </>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default App;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6)
  }
}))