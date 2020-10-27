import React, {FC, ChangeEvent, KeyboardEvent} from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import {AddTodo} from './AddTodo'

interface ITodosHeaderProps {
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
	value: string
}


export const TodosHeader: FC<ITodosHeaderProps> = ({
  onChange, onKeyDown, value
}) => {
    return (
        <Grid item container xs={12} sm={6}>
            <Grid container direction="column" alignItems="center">
                <Typography variant="h3" component="h3" gutterBottom>
                    Todos
                </Typography>
                <Typography variant="body1" gutterBottom>
                    What are you looking to do today?
                </Typography>
            </Grid>
            <Grid container>
              <AddTodo onKeyDown={onKeyDown} onChange={onChange} value={value} />
            </Grid>
        </Grid>
    )
}
