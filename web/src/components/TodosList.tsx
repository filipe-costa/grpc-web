import React, {FC} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import {
  Todo as ITodo
} from '../codegen/todos_pb'

import {Todo} from './Todo'

interface ITodosList {
  todos: ITodo.AsObject[],
  onDelete: (uuid: string) => void,
  onComplete: ({uuid, description, done}: ITodo.AsObject) => void
}

export const TodosList: FC<ITodosList> = ({todos, onComplete, onDelete}) => {
  const classes = useStyles()
  return (
    <Grid 
      className={classes.gridContainer} 
      container 
      wrap="nowrap" 
      direction="column" 
      alignItems="center">
      {todos.map(({uuid, description, done}) => (
        <Todo
          onDelete={onDelete}
          onComplete={onComplete}
          key={uuid}
          uuid={uuid} 
          description={description} 
          done={done} />
      ))}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "620px",
    overflowY: "auto",
    paddingBottom: theme.spacing(4)
  }
}))